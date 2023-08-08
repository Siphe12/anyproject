import React from 'react'
import '../CSS/Footer.css'

function Footer() {
  return (
    <div>
       
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">The build one of step fix to any cars.We break down the hundreds of models for sale today into a tidy group of car body types for easier shopping.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://localhost:5173/about">About Us</a></li>
              <li><a href="http://localhost:5173/contact">Contact Us</a></li>
              <li><a href="http://localhost:5173/Vehicle">Vehicle</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Repaircar</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a></li>
              <li><a className="twitter" href="https://twitter.com/"><i class="bi bi-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}

export default Footer
