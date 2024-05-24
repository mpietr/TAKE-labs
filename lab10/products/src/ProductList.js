import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ id, title, brand }) {
    return (
      <li>
        <Link to={`/details/${id}`}>{title}</Link> ({brand})
      </li>
    );
  }

function ProductList({products}) {
  
  const [filter, setFilter] = useState([]);

  

  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.title.toString().toLowerCase().includes(filter.toString().toLowerCase())
  );

  return (
    <div className="ProductList">
      <h1>List of products</h1>
      <label>
        Filter by product title:
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
      <ul>
        {filteredProducts.map(product => (
          <ProductItem 
            key={product.id} 
            id={product.id}
            title={product.title} 
            brand={product.brand} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList