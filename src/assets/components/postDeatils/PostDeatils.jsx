import { useLoaderData, useNavigate } from "react-router-dom";

const PostDeatils = () => {
  const post = useLoaderData();
  const nanigate = useNavigate();
  const {id, title, body} = post;

  const handleGoBack =()=>{
   nanigate(-1);
  }

 return (
 <div>
  <h3>Post details About:{id}</h3>
  <p>title:{title}</p>   
  <p><small>{body}</small></p>
  <button onClick={handleGoBack}>Go Back</button>                                                      
 </div>
 );
};

export default PostDeatils;