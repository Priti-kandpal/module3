export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ========== NAVBAR ========== */}
      <nav className="bg-white shadow p-4 flex flex-col md:flex-row md:justify-between gap-3">
        <h1 className="font-bold text-xl">TailwindPage</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <a className="hover:text-indigo-600">Home</a>
          <a className="hover:text-indigo-600">Services</a>
          <a className="hover:text-indigo-600">Contact</a>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="p-8 text-center">
        <h2
          className="text-xl md:text-3xl lg:text-5xl font-bold
          bg-gradient-to-r from-pink-500 to-orange-400
          text-transparent bg-clip-text"
        >
          Learn Tailwind CSS
        </h2>

        <div className="mt-6 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="hero"
            className="w-72 rounded-lg shadow-lg transition transform hover:scale-105"
          />
        </div>

        <button
          className="mt-6 px-6 py-2 rounded
          bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
        >
          Get Started
        </button>
      </section>

      {/* ========== LIST ========== */}
      <section className="p-8">
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="hover:text-blue-600">Utility First CSS</li>
          <li className="hover:text-blue-600">Mobile Responsive</li>
          <li className="hover:text-blue-600">Easy Styling</li>
        </ul>
      </section>

      {/* ========== CARD GRID (6 CARDS) ========== */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
          "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
          "https://images.unsplash.com/photo-1518770660439-4636190af475",
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
        ].map((img, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <img
              src={img}
              alt="card"
              className="rounded mb-3 h-40 w-full object-cover"
            />
            <h3 className="font-bold text-lg">Card {index + 1}</h3>
            <p className="text-sm text-gray-600">
              This is a simple Tailwind card.
            </p>
            <button className="mt-3 px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">
              View
            </button>
          </div>
        ))}
      </section>

      {/* ========== TABLE ========== */}
      <section className="p-8 overflow-x-auto">
        <table className="w-full border border-gray-300 bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Product</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border p-2">Laptop</td>
              <td className="border p-2">$1000</td>
              <td className="border p-2">Available</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border p-2">Mobile</td>
              <td className="border p-2">$500</td>
              <td className="border p-2">Out of Stock</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border p-2">Tablet</td>
              <td className="border p-2">$300</td>
              <td className="border p-2">Available</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="border p-2">Headphones</td>
              <td className="border p-2">$150</td>
              <td className="border p-2">Available</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ========== FORM ========== */}
      <section className="p-8">
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4">
          <input
            className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-400"
            placeholder="Name"
          />
          <input
            className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-400"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full border rounded p-2 focus:ring-2 focus:ring-indigo-400"
            placeholder="Password"
          />
          <button
            className="w-full py-2 bg-gray-200 rounded hover:bg-gray-300 active:bg-gray-400"
          >
            Submit
          </button>
        </form>
      </section>

    </div>
  );
}

