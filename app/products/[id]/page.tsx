
const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    return <p>Product not found.</p>;
  }

  const product = await res.json();

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Render the product image */}
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      {product.video && (
        <video controls>
          <source src={product.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default ProductPage;
