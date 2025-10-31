import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const BASE_URL = "http://localhost:5000";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchCart();
    }
  }, [navigate]);

  const fetchCart = async () => {
    try {
      const res = await API.get('/cart', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCartItems(res.data.products || []);
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      if (!item.productId) return total;
      return total + item.productId.price * item.quantity;
    }, 0);
  };

  const handleIncrease = async (productId) => {
    try {
      await API.post('/cart/add', { productId, quantity: 1 });
      fetchCart();
    } catch (err) {
      console.error('Error increasing quantity:', err);
    }
  };

  const handleDecrease = async (productId, quantity) => {
    try {
      if (quantity <= 1) {
        await handleRemove(productId);
      } else {
        await API.post('/cart/add', { productId, quantity: -1 });
        fetchCart();
      }
    } catch (err) {
      console.error('Error decreasing quantity:', err);
    }
  };

  const handleRemove = async (productId) => {
    try {
      await API.delete(`/cart/remove/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      fetchCart();
    } catch (err) {
      console.error('Error removing product:', err);
    }
  };

  return (
    <div className="container py-5 text-black">
      <h2 className="mb-4 text-center fw-bold">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center mt-5">
          <p className="lead">Your cart is currently empty.</p>
          <button className="btn-plain-rect mt-3" onClick={() => navigate('/')}>
            Browse Products
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cartItems.map((item, index) => {
              const product = item.productId;
              if (!product) return null;

              return (
                <div key={index} className="card mb-3 shadow-sm p-3 border-light-subtle text-black">
                  <div className="row g-3 align-items-center">
                    <div className="col-md-3">
                      <img
                        src={`${BASE_URL}${product.imageUrl}`}
                        className="img-fluid rounded"
                        alt={product.name}
                        style={{ maxHeight: '100px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h5 className="mb-1">{product.name}</h5>
                          <p className="mb-1">₹{product.price} per unit</p>
                          <div className="d-flex align-items-center gap-2">
                            <button className="btn-plain-rect btn-sm" onClick={() => handleDecrease(product._id, item.quantity)}>-</button>
                            <span className="px-2">{item.quantity}</span>
                            <button className="btn-plain-rect btn-sm" onClick={() => handleIncrease(product._id)}>+</button>
                          </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold mb-2">₹{product.price * item.quantity}</p>
                          <button className="btn-plain-rect btn-sm text-danger" onClick={() => handleRemove(product._id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm p-4 border-0 sticky-top text-black" style={{ top: '90px' }}>
              <h5 className="mb-4 fw-semibold">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Total Items:</span>
                <strong>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</strong>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <strong>₹{calculateTotal()}</strong>
              </div>
              <hr />
              <button className="btn-plain-rect w-100 mt-3 btn-lg" onClick={() => navigate('/checkout')}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
