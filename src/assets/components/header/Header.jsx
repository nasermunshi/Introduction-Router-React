import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
 return (
 <div>  
   <nav>
     <span>My Website</span>               
     <Link to='/'>Home</Link>               
     <Link to='/users'>Users</Link>
     <Link to='/posts'>Posts</Link>               
     <Link to='/about'>About us</Link>               
     <Link to='/contact'>Contact</Link>               
                   
   </nav>                                                         
 </div>
 );
};

export default Header;