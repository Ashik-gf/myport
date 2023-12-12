import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
   
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4 text-2xl">
<Link to={'https://www.facebook.com/Ashik.998/'}><FaFacebook></FaFacebook></Link>
<Link to={'https://www.instagram.com/ashikhasan998/'}><FaSquareInstagram></FaSquareInstagram></Link>
<Link to={'https://github.com/Ashik-gf'}><FaGithub></FaGithub></Link>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer