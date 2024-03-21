import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const {id, title} = post;

  const navigate = useNavigate();

  const postStyl ={
                    border: '2px solid yellow',  
                    padding: '5px',
                    borderRadius:'20px'}
                    
   const handleShowDeatil = () =>{
     navigate(`/post/${id}`);
   }                 

 return (
 <div style={postStyl}>
   <h4>Post of id:{id}</h4>  
   <p>{title}</p>
   <Link to={`/post/${id}`}>Post Deatal</Link> 
   <Link to={`/post/${id}`}><button>Show Deatils</button></Link>
   <button onClick={handleShowDeatil}>Click to see Deatile</button>                                                      
 </div>
 );
};

export default Post;