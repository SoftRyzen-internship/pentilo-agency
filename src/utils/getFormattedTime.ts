export const getFormattedTime = (time: number): string => {
  if (time <= 0) return `00:00:00`;

  const hours = Math.floor(time / (60 * 60 * 1000));
  const mins = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor(((time % (60 * 60 * 1000)) % (60 * 1000)) / 1000);

  return `${hours.toString().padStart(2, '0')}:${mins
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
