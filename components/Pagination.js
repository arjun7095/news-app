export default function Pagination({ page, setPage }) {
  return (
    <div className="pagination">
      <button className="page-button" disabled={page <= 1} onClick={() => setPage(page - 1)}>← Prev</button>
      <span className="font-semibold text-gray-700">Page {page}</span>
      <button className="page-button" onClick={() => setPage(page + 1)}>Next →</button>
    </div>
  );
}
