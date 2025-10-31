import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../utils/api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    API.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);


const handleAddToCart = () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  if (!token || !userId) {
    alert("Please login to add items to cart.");
    navigate('/auth');
    return;
  }

  API.post('/cart/add', { userId, productId: id }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(() => navigate('/cart'))
    .catch(err => {
      console.error(err);
      alert('Error adding to cart');
    });
};


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.specifications}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <button onClick={handleAddToCart} className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;