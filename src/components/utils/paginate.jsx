export default function paginate(allMovies, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIdex = currentPage * pageSize;

  return allMovies.slice(startIndex, endIdex);
}
