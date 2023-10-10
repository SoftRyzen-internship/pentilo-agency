export function splitDescription(description: string) {
  const arr = description.split(' ');
  const firstPart = arr.slice(0, 8).join(' ');
  const secondPart = arr.slice(8, 15).join(' ');
  const thirdPart = arr.slice(15, -4).join(' ');
  return [firstPart, secondPart, thirdPart];
}
