import { useEffect, useState } from 'react';

function ApiProducts() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const limit = 10; // Items per page

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
        if (!res.ok) throw new Error('Oops, something went wrong');
        const result = await res.json();
        setData(result);
        setFiltered(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  useEffect(() => {
    const results = data.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, data]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Fetched API Posts</h2>

      <input
        type="text"
        placeholder="Search by title..."
        className="w-full border px-3 py-2 mb-4 rounded"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(post => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          disabled={page === 1}
        >
          Prev
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage(p => p + 1)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ApiProducts;
