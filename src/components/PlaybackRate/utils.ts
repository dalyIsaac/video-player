export const PLAYBACKRATE_STEP = 0.2;
export const PLAYBACKRATE_MIN = 0.4;
export const PLAYBACKRATE_MAX = 20.0;

export function roundPlaybackRate(value: number) {
  let valueStr = value.toPrecision(2);
  return valueStr;
}
