export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h1 className="font-bold">Todos App</h1>

      <div className="space-x-3">
        <button>All</button>
        <button>Completed</button>
        <button>Pending</button>
        <button className="ml-4 border px-3 py-1">Logout</button>
      </div>
    </div>
  );
}
