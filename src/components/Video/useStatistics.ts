import { useState, useCallback } from "react";
import useWindowSize, { WindowSize } from "@rehooks/window-size";
import React from "react";
import { STATS_PANEL_HEIGHT, STATS_PANEL_WIDTH } from "../StatisticsPanel";

const TOP = "statistics.position.top";
const LEFT = "statistics.position.left";

export interface Position {
  top: number;
  left: number;
}

const getMiddle = (
  windowSize: WindowSize,
  panelHeight: number,
  panelWidth: number
): Position => {
  const halfPanelHeight = Math.floor(panelHeight / 2);
  const halfPanelWidth = Math.floor(panelWidth / 2);

  const halfWindowHeight = Math.floor(windowSize.innerHeight / 2);
  const halfWindowWidth = Math.floor(windowSize.innerWidth / 2);

  return {
    top: halfWindowHeight - halfPanelHeight,
    left: halfWindowWidth - halfPanelWidth,
  };
};

const getKey = (key: string): number | null => {
  const value = localStorage.getItem(key);
  if (value === null) {
    return null;
  }

  const float = parseFloat(value);
  if (isNaN(float)) {
    return null;
  }

  return float;
};

const update = ({ top, left }: Position) => {
  localStorage.setItem(TOP, top.toString());
  localStorage.setItem(LEFT, left.toString());
};

const getPositionInsideView = (
  { innerHeight, innerWidth }: WindowSize,
  panelHeight: number,
  panelWidth: number,
  position: Position
) => {
  position = { ...position };

  if (position.top < 0) {
    // Above
    position.top = 0;
  } else if (position.top + panelHeight > innerHeight) {
    // Bottom
    position.top = innerHeight - panelHeight;
  }

  if (position.left < 0) {
    // Left
    position.left = 0;
  } else if (position.left + panelWidth > innerWidth) {
    // Right
    position.left = innerWidth - panelWidth;
  }

  return position;
};

export default function useStatistics(panelHeight: number, panelWidth: number) {
  // Visibility
  const [isStatsVisible, setIsStatsVisible] = useState(true);

  const toggleIsStatsVisible = useCallback(() => {
    setIsStatsVisible(!isStatsVisible);
  }, [isStatsVisible]);

  // Location
  const windowSize = useWindowSize();

  const getStoredPosition = useCallback((): Position => {
    const top = getKey(TOP);
    const left = getKey(LEFT);

    if (top === null || left === null) {
      const position = getMiddle(windowSize, panelHeight, panelWidth);
      update(position);
      return position;
    }

    const position = getPositionInsideView(
      windowSize,
      panelHeight,
      panelWidth,
      { top, left }
    );

    return position;
  }, [windowSize, panelHeight, panelWidth]);

  const updatePosition = useCallback((top: number, left: number) => {
    update({ top, left });
  }, []);

  return {
    isStatsVisible,
    toggleIsStatsVisible,
    position: getStoredPosition(),
    updatePosition,
  };
}

export const StatisticsVisible = React.createContext(false);
export const ToggleStatisticsVisible = React.createContext(() => {});

export const StatisticsPosition = React.createContext(
  getMiddle(
    {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    },
    STATS_PANEL_HEIGHT,
    STATS_PANEL_WIDTH
  )
);
export const UpdateStatisticsPosition = React.createContext(
  (top: number, left: number) => {}
);
