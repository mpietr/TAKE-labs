import { useParams, Link } from 'react-router-dom';

function ProductDetails({products}) {
    const { id } = useParams();
    const filtered = products.filter(product => product.id.toString() === id);

    if (filtered.length === 0) {
        return null;
    }
    
    const product = filtered[0];

    return (
        <div>
          <h1>{product.title}</h1>
          <div>Category: {product.category}</div>
          <div>Brand: {product.brand}</div>
          <div>Description: {product.description}</div>
          <div>Price: ${product.price}</div>
          <img src={product.thumbnail} alt={product.title} />
          <br />
          <Link to="/">Back to product list</Link>
        </div>
    );
}

export default ProductDetails;