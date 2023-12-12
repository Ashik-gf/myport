import { Outlet } from "react-router"
import Navbar from "../component/Navbar/Navbar"
import Footer from "../Pages/Home/Footer"




const MainLayOut = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayOut