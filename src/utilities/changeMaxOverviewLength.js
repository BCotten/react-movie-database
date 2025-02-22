export default function changeMaxOverviewLength(overview) {
  if (overview == null) {
    return 'N/A';
  }
  if (overview.length > 200) {
    return `${overview.slice(0, 200)}...`;
  }
  return overview;
}
