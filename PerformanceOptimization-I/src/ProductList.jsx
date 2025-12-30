function ProductList({ products, onSelect }) {
  return (
    <div className="product-list">
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span>
              {product.name} – ₹{product.price}
            </span>
            <button onClick={() => onSelect(product)}>
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;


