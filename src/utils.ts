export function getTime(value: number) {
  return new Date(value * 1000).toISOString().substr(11, 8);
}
