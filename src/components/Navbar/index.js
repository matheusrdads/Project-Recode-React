import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/images.jfif';

export default function Navbar() {
    return (
     
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link className="navbar-brand" to="/"><img src={images}  id="logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Alterna navegação">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle text-white" id="navardrop_cardapio" data-toggle="dropdown">Products</a>
                <div className="dropdown-menu bg-warning">
                    <a className="dropdown-item" href=".;/./views/products.php">All</a>
                    <a onClick="show_categories('heavymetal')" className="dropdown-item" >Heavy Metal</a>
                    <a onClick="show_categories('blackmetal')" className="dropdown-item" >Black Metal</a>
                    <a onClick="show_categories('thrashmetal')" className="dropdown-item" >Trash Metal</a>
                    <a onClick="show_categories('progressivemetal')" className="dropdown-item" >Progressive Metal</a>
                    <a onClick="show_categories('folkmetal')" className="dropdown-item" >Folk Metal</a>
                    <a onClick="show_categories('hardrock')"className="dropdown-item" >Hard Tock</a>
                </div>
            </li>
      <li className="nav-item">
        <Link className="nav-link  text-white" to="/stores">Stores</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link  text-white" to="/contact">Contact</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Go</button>
    </form>
  </div>
</nav>
        </div>
    );
}