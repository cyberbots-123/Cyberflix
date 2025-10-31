import React, { useEffect, useState } from "react";
import API from "../utils/api";
import "./Products.css";
import { assets } from "../assets/assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PRODUCTS_PER_PAGE = 16;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }
    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredComponents = products.filter((comp) =>
    activeCategory === "All" ? true : comp.category === activeCategory
  );

  const finalComponents = filteredComponents.filter((comp) =>
    comp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(finalComponents.length / PRODUCTS_PER_PAGE);
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = finalComponents.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

  const openModal = (component) => {
    setSelectedProduct(component);
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = async () => {
    try {
      const payload = {
        productId: selectedProduct._id,
        quantity,
      };

      await API.post("/cart/add", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // alert(`Added ${quantity} x ${selectedProduct.name} to cart!`);
      toast.success(`Added ${quantity} x ${selectedProduct.name} to cart!`);
      setSelectedProduct(null);
    } catch (error) {
      console.error(error);
      // alert("Failed to add to cart. Please login or try again.");
      toast.error("Failed to add to cart. Please login or try again.");
    }
  };

  const handleCloseModal = () => setSelectedProduct(null);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const getImageUrl = (comp) => {
    if (comp.image) return comp.image;
    if (comp.imageUrl?.startsWith("http")) return comp.imageUrl;
    return `http://localhost:5000${comp.imageUrl}`;
  };

  return (
    <div className="products-container">      
      <h2 className="section-title">Our Exclusive Electronics, Robotics and Artificial Intelligence components and Materials</h2>

      <div className="category-buttons">
        <button
          className={`category-button ${activeCategory === "All" ? "active" : ""}`}
          onClick={() => {
            setActiveCategory("All");
            setCurrentPage(1);
          }}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search components by name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="component-grid">
        {paginatedProducts.map((comp, index) => (
          <div
            className="component-card"
            key={index}
            onClick={() => openModal(comp)}
          >
            <img
              src={getImageUrl(comp)}
              alt={comp.name}
              className="component-image"
              onError={(e) => {
                e.target.src = assets.Arduino_Uno_R3;
              }}
            />
            <h4>{comp.name}</h4>
            <p>₹{comp.price}</p>
            <small>{comp.specs?.split(";")[0]}{comp.specs?.includes(",") ? "..." : ""}</small>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {selectedProduct && (
        <div className="fullscreen-modal" onClick={handleCloseModal}>
          <div className="fullscreen-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={getImageUrl(selectedProduct)}
                  alt={selectedProduct.name}
                  onError={(e) => {
                    e.target.src = assets.Arduino_Uno_R3;
                  }}
                />
              </div>
              <div className="modal-info">
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <p className="modal-price-tag">
  Price: <span>₹{selectedProduct.price}</span>
  <br />
  <small style={{ fontSize: "0.85rem", color: "#666" }}>(Excluding 18% GST)</small>
</p>

                <div className="modal-spec-list">
                  <h4>Specifications:</h4>
                  <ul>
  {selectedProduct.specs
    ?.split(";")
    .map((s, i) => s.trim())
    .filter((s) => s.length > 0)
    .map((s, i) => (
      <li key={i}>{s}</li>
    ))}
</ul>
                </div>

                <div className="quantity-selector">
                  <h5>Quantity:</h5>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button onClick={decrementQuantity} className="qty-btn">-</button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity} className="qty-btn">+</button>
                  </div>
                </div>

                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={2000} />

    </div>
  );
};

export default Products;
