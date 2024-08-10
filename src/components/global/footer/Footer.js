import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className='main'>
        <div className='brand'>
          <h2>Brand Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            nesciunt porro veritatis praesentium ratione. Illo voluptates
            voluptatem sint minima quam.
          </p>
        </div>
        <div>
          <h2>company</h2>
          <ul>
            <li>
              <Link to='#'>Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to='#'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='#'>Project Protection</Link>
            </li>
            <li>
              <Link to='#'>FAQs</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>About</h2>
          <ul>
            <li>
              <Link to='#'>Team</Link>
            </li>
            <li>
              <Link to='#'>Blog</Link>
            </li>
            <li>
              <Link to='#'>Contact</Link>
            </li>
            <li>
              <Link to='#'>Store</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>help</h2>
          <ul>
            <li>
              <Link to='#'>Getting Started</Link>
            </li>
            <li>
              <Link to='#'>Feedback</Link>
            </li>
            <li>
              <Link to='#'>Network Status</Link>
            </li>
            <li>
              <Link to='#'>Other Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>newsletter</h2>
          <form >
            <input type='text' placeholder='E-mail' />
            <button className='btn'>Subscribe</button>
            <div className='accounts'>
              <i className='fab fa-facebook-f' />
              <i className='fab fa-instagram' />
              <i className='fab fa-google-plus-g' />
              <i className='fab fa-linkedin-in' />
            </div>
          </form>
        </div>
      </div>
      <hr />
      <p className='copyright'>All Right Reserved © 2023 Brand Name</p>
    </footer>
  )
}

export default Footer
