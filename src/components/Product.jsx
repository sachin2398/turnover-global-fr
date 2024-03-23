
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Product.css"
const Product = () => {
    const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Fetch data from Fake Store API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
          setProducts(response.data);
          console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (event, product) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedProducts([...selectedProducts, product]);
    } else {
      setSelectedProducts(selectedProducts.filter(item => item.id !== product.id));
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
      <div className='main-product-body'>
    <div className='main-box-product'>
                <div className='div-1'  >
                   
                 <h2>Please mark your interests!</h2>
                  
                   
                  <p>We will keep you notified.</p>
                  
                        
      </div>
      <div className='div-2' >
           <p>My saved interests!</p>
      <div className="product-items">
        {currentItems.map((product, index) => (
          <div key={index} className="product-item">
            <input
              type="checkbox"
              checked={selectedProducts.some(item => item.id === product.id)}
              onChange={(event) => handleCheckboxChange(event, product)}
            className='custom-checkbox'/>
            <span>{product.category}</span>
          </div>
        ))}
      </div>
     </div>
     
      <div className="pagination" >
        <button onClick={() => paginate(1)}>&laquo;</button>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
            {i + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>... &gt;</button>
        <button onClick={() => paginate(totalPages)}>&raquo;</button>
      </div>
            </div>
            </div>
  )
}

export default Product
