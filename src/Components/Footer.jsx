import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: gymweb@gmail.com</p>
            <p>Phone: +251 234 567 890</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Membership</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Social Media</h3>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook-f">gymweb</i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i>@gymwed</a></li>
              <li><a href="#"><i className="fab fa-instagram">@gymweb</i></a></li>
              <li><a href="#"><i className="fab fa-linkedin">@gymweb</i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Gym Website. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
