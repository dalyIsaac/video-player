import { STATS_PANEL_HEIGHT, STATS_PANEL_WIDTH } from "../StatisticsPanel";
import { useCallback, useState } from "react";
import useWindowSize, { WindowSize } from "@rehooks/window-size";

import React from "react";

const Y_KEY = "statistics.position.y";
const X_KEY = "statistics.position.x";

export interface Position {
  x: number;
  y: number;
}

const getMiddle = (
  windowSize: WindowSize,
  panelHeight: number,
  panelWidth: number,
): Position => {
  const halfPanelHeight = Math.floor(panelHeight / 2);
  const halfPanelWidth = Math.floor(panelWidth / 2);

  const halfWindowHeight = Math.floor(windowSize.innerHeight / 2);
  const halfWindowWidth = Math.floor(windowSize.innerWidth / 2);

  return {
    x: halfWindowWidth - halfPanelWidth,
    y: halfWindowHeight - halfPanelHeight,
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

/**
 * Makes sure that the position is inside the current window.
 * @param windowSize Current window size
 * @param panelHeight The height of the settings pane
 * @param panelWidth The width of the settings pane
 * @param position The current position of the settings pane
 */
const getPositionInsideView = (
  { innerHeight, innerWidth }: WindowSize,
  panelHeight: number,
  panelWidth: number,
  position: Position,
) => {
  if (position.y < 0) {
    // Above
    position.y = 0;
  } else if (position.y + panelHeight > innerHeight) {
    // Bottom
    position.y = innerHeight - panelHeight;
  }

  if (position.x < 0) {
    // Left
    position.x = 0;
  } else if (position.x + panelWidth > innerWidth) {
    // Right
    position.x = innerWidth - panelWidth;
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

  /**
   * Gets the stored position, and returns a valid position (within the window).
   * @param oldPosition Previous position. When this is provided, localStorage
   * lookup will not be done.
   */
  const getPosition = useCallback(
    (oldPosition?: Partial<Position>): Position => {
      const x = oldPosition?.x ?? getKey(X_KEY);
      const y = oldPosition?.y ?? getKey(Y_KEY);

      if (y === null || x === null) {
        const position = getMiddle(windowSize, panelHeight, panelWidth);
        return position;
      }

      return getPositionInsideView(windowSize, panelHeight, panelWidth, {
        x,
        y,
      });
    },
    [windowSize, panelHeight, panelWidth],
  );

  const [position, setPosition] = useState<Position>(getPosition());

  /**
   * Updates the position based on movement or window resizing. The new position
   * is stored inside both localStorage and React state.
   * @param x The new x position of the window. Not provided after window
   * resizing.
   * @param y The new y position of the window. Not provided after window
   * resizing.
   */
  const updatePosition = useCallback(
    (x?: number, y?: number) => {
      const newPosition = getPosition({ x, y });
      setPosition(newPosition);
      localStorage.setItem(X_KEY, newPosition.x.toString());
      localStorage.setItem(Y_KEY, newPosition.y.toString());
    },
    [getPosition],
  );

  return {
    isStatsVisible,
    position,
    toggleIsStatsVisible,
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
    STATS_PANEL_WIDTH,
  ),
);
export const UpdateStatisticsPosition = React.createContext(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_x?: number, _y?: number): void => {},
);
