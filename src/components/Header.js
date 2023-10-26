import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLogin, AiOutlineUserAdd} from 'react-icons/ai'

const Header = () => {
  return (  
    
    <div className='hero'>
        {/** Header Section */}
        <header className='header long px-0'>
            <nav className='navbar navbar-expand-lg custom_nav-container'>
                <a className='navbar-brand' href="index.html"> 
                    <span>
                        TO 23
                    </span>
                </a>
                <button className='navbar-toggle' type='button' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=''></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                        <ul className="navbar-nav  ">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html"> About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="furniture.html">Furnitures</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="blog.html">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="quote_btn-container">
                        <a href="">
                            <span>
                                Login
                            </span>
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </a>
                        <form className="form-inline">
                            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
        {/** End Header */} 

    </div>
    
  )
}
export default Header
