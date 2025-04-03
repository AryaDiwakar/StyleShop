import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

const Products = ({ addToCart }) => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const category = searchParams.get('category');
    let filtered = products;

    if (category && category !== 'all') {
      filtered = products.filter(product => product.category === category);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchParams]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section className="products-header">
        <div className="container">
          <h2>All Products</h2>
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="category-filter">Category:</label>
              <select 
                id="category-filter" 
                value={searchParams.get('category') || 'all'}
                onChange={(e) => {
                  const category = e.target.value;
                  if (category === 'all') {
                    window.location.href = '/products';
                  } else {
                    window.location.href = `/products?category=${category}`;
                  }
                }}
              >
                <option value="all">All Categories</option>
                <option value="men">Men's Clothing</option>
                <option value="women">Women's Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="footwear">Footwear</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="sort-filter">Sort By:</label>
              <select 
                id="sort-filter" 
                onChange={(e) => {
                  alert('Sorting functionality would be implemented in a real e-commerce site.');
                }}
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {currentProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
              />
            ))}
          </div>
          <div className="pagination">
            <button 
              className="btn-small" 
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span id="page-info">Page {currentPage} of {totalPages}</span>
            <button 
              className="btn-small" 
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;