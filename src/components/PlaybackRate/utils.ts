export const PLAYBACKRATE_SCALE = 10;
export const PLAYBACKRATE_STEP = 0.1 * PLAYBACKRATE_SCALE;
export const PLAYBACKRATE_MIN = 0.4 * PLAYBACKRATE_SCALE;
export const PLAYBACKRATE_MAX = 3 * PLAYBACKRATE_SCALE;

export function roundPlaybackRate(value: number) {
  let valueStr = value.toString();
  return valueStr;
}
