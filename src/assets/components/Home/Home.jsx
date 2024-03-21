
import { Outlet } from "react-router-dom";
import Footer from "../header/Footer";
import Header from "../header/Header";

const Home = () => {
 return (
  <div>
    <Header></Header> 
    <Outlet></Outlet>               
   <Footer></Footer>
                                                           
  </div>
 );
};

export default Home;