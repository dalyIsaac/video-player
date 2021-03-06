import format from "date-fns/format";
/**
 * Gets the time as a string from the number of seconds.
 * @param value Number of seconds
 */
export function getTime(value: number): string {
  return new Date(value * 1000).toISOString().substr(11, 8);
}

/**
 * Gets the time as a string of the datetime from the number of milliseconds
 * from the UNIX epoch.
 * @param dateTime The number of milliseconds from the UNIX epoch.
 */
export function getEpochTimeString(dateTime: number): string {
  const d = new Date(dateTime);
  return format(d, "HH:mm:ss");
}
