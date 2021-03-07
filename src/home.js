
import BlogList from "./blogList";
import useFetch from "./usefetch";

const Home = () => {
    
   const {data:blogs,error,ispending}=useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">
            {error&& <div>{error}</div>}
            {ispending&&<div>loading....</div>}
            {blogs&&<BlogList blogs={blogs} title="ALL BLOGS"  />}
            
            
        </div>
     );
}
 
export default Home;