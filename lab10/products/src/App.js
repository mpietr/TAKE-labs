import './App.css';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      }).catch(error => console.error("There was an error!", error));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList products={products} />,
    },
    {
      path: "details/:id",
      element: <ProductDetails products={products} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );

}

export default App;
