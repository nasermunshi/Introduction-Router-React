import { Link } from "react-router-dom";

const User = ({user}) => {
   const {id, name, email, phone} = user;
   const userStyl ={
    border: '2px solid yellow',  
    padding: '5px',
    borderRadius:'20px'              
   }                
  return (
 <div style={userStyl}>
    <h2>{name}</h2>
    <p>email:{email}</p> 
    <p>phone:{phone}</p> 
    <Link to={`/user/${id}`}>Show Deatails</Link>                                                      
 </div>
 );
};

export default User;