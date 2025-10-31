import React from 'react';

const ProductModal = ({ product, onClose }) => {
  return (
    <>
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1040 }}
        onClick={onClose}
      ></div>

      <div
        className="modal d-block"
        tabIndex="-1"
        role="dialog"
        style={{ zIndex: 1050 }}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
        >
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-0">
              <h5 className="modal-title">{product.name}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded mb-3"
              />
              <p>{product.description}</p>
              <h5 className="text-primary">{product.price}</h5>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
