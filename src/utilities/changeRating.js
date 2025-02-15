export default function changeRating(rating) {
  if (rating == null || isNaN(rating)) {
    return 'N/A';
  }
  const parsedRating = Number.parseInt(rating, 10);
  // Assuming rating scale of 0-10
  if (parsedRating < 0 || parsedRating > 10) {
    return 'Invalid rating';
  }
  const percentage = parsedRating * 10;
  return `${percentage}%`;
}