import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
  let onclick=()=>{
    let burger=document.querySelector('.burger');
    let navbar=document.querySelector('.navbar');
    let rightnav=document.querySelector('.right-nav');
    let navlist=document.querySelector('.nav-list');
    burger.addEventListener('click',()=>{
      rightnav.classList.toggle('v-class-rsp')
      navlist.classList.toggle('v-class-rsp')
      navbar.classList.toggle('h-nav-rsp')
    })
  }
  return (
      <nav className="navbar background h-nav-rsp">
        <ul className="nav-list v-class-rsp">
          <div className="logo"><img src={logo} alt="logo" /></div>
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#contact">Contact Us</Link></li>
        </ul>
        <div className="right-nav v-class-rsp">
          <input type="text" name="search" id="search"/>
          <button className="btn btn-sm">Search</button>
        </div>
        <div className="burger" onClick={onclick}>
          <div className="line">
          </div>
          <div className="line">
          </div>
          <div className="line">
          </div>
        </div>
      </nav>
  )
}

export default Navbar
