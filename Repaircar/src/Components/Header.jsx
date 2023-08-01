import React from 'react'
import '../CSS/Header.css'

function Header() {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src="https://t4.ftcdn.net/jpg/01/16/11/11/360_F_116111191_AyEL3HKp4IBC63DGigUptYt372yFlxll.jpg" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Vehicle">Vehicle</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact">Contact </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
