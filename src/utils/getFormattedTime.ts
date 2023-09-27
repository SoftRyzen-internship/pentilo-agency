export const getFormattedTime = (time: number): string => {
  if (time <= 0) return `00:00:00`;

  const hours = Math.floor(time / (60 * 60 * 1000))
    .toString()
    .padStart(2, '0');
  const mins = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000))
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(((time % (60 * 60 * 1000)) % (60 * 1000)) / 1000)
    .toString()
    .padStart(2, '0');

  return `${hours}:${mins}:${seconds}`;
};
