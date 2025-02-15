export default function changeMinHrMin(min) {
  if (min == null || isNaN(min)) {
    return 'N/A';
  }
  const totalMinutes = Number.parseInt(min, 10);
  if (totalMinutes < 0) {
    return 'Invalid duration';
  }
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const hourUnit = hours === 1 ? 'hr' : 'hrs';
  const minuteUnit = minutes === 1 ? 'min' : 'mins';
  return hours > 0 
    ? `${hours}${hourUnit} ${minutes}${minuteUnit}`
    : `${minutes}${minuteUnit}`;
}