export default function changeRating(rating) {
  Number.parseInt(rating, 10);
  rating = rating * 10;
  rating = rating.toString();
  return `${rating}%`;
}