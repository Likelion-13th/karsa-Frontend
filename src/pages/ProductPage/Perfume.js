import React, { useState } from 'react';
import Banner from './Banner';
import ProductCard from './ProductCard';
import "../../styles/ProductPage.css";
import PayModal from "../../components/PayModal";

const Perfume = () => {
  const products = [
    {
      id: 1,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_1.png",
      isNew: true,
    },
    {
      id: 2,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_2.png",
      isNew: true,
    },
    {
      id: 3,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_3.png",
      isNew: true,
    },
    {
      id: 4,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_4.png",
      isNew: true,
    },
    {
      id: 5,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_5.png",
      isNew: true,
    },
    {
      id: 6,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_6.png",
      isNew: true,
    },
     {
      id: 7,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_7.png",
      isNew: true,
    },
     {
      id: 8,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_8.png",
      isNew: true,
    },
     {
      id: 9,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_9.png",
      isNew: true,
    },
     {
      id: 10,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_10.png",
      isNew: true,
    },
     {
      id: 11,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_11.png",
      isNew: true,
    },
     {
      id: 12,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_12.png",
      isNew: true,
    },
     {
      id: 13,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_13.png",
      isNew: true,
    },
     {
      id: 14,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_4.png",
      isNew: true,
    },
     {
      id: 15,
      name: "퍼퓸",
      brand: "브랜드",
      price: 30000,
      imagePath: "/img/perfume_15.png",
      isNew: true,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCardClose = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <div>
      <Banner title="Perfume" imagePath={"/banner_diffuser3.png"} />
      <div className="product-container">
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleCardClick(product)}
            />
          ))}
        </div>
        
        <div className="paging">
          {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)}>
              Prev
            </button>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage === pageNumber ? 'active' : ''}
              >
                {pageNumber}
              </button>
            )
          )}
          
          {currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </button>
          )}
        </div>
      </div>

      {isModalOpen && (
        <PayModal product={selectedProduct} onClose={() => handleCardClose()} />
      )}
    </div>
  );
};

export default Perfume;
