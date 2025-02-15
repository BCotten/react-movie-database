export default function changeMinHrMin(min) {
  Number.parseInt(min, 10);
  const hours = Math.floor(min / 60);
  const minutes = min % 60;
  return `${hours}hr ${minutes}m`;
}