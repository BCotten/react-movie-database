export default function changeMaxOverviewLength(overview) {
  if (overview == null) {
    return 'N/A';
  }
  if (overview.length > 250) {
    return `${overview.slice(0, 250)}...`;
  }
  return overview;
}