import { useHistory, useParams } from "react-router-dom";
import useFetch from "./usefetch";

const Blogdetails = () => {
    const history=useHistory()
    const {id}=useParams();
    const {data:blog,error,ispending}=useFetch('https://github.com/thelastpawn009/fakejson/blob/[main|master]/db.json'+id);
    const handleClick=()=>{
        fetch('https://github.com/thelastpawn009/fakejson/blob/[main|master]/db.json'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        
        <div className="blog-details">
            
            {ispending&&<div>loading....</div>}
            {error && <div>{error}</div>}
            {blog&& <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <div>
                    {blog.body}
                </div>
                <button onClick={handleClick}>Delete</button>
            </article>}

        </div>
     );
}
 
export default Blogdetails;
