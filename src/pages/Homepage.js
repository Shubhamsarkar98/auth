import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Product from './Product'

const Homepage = () => {
  return (
    <div><Navbar/>
   
   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Grocery/COOP/May/770x375.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/Coop/Nov21/Happilo.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Grocery/COOP/April/SVD_Storefront_Banner.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Product/>
<Products/>
<Footer/>
</div>

   
  )
}

export default Homepage