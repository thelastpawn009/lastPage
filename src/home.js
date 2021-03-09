
import BlogList from "./blogList";
import useFetch from "./usefetch";

const Home = () => {
    
   const {data:blogs,error,ispending}=useFetch('https://github.com/thelastpawn009/fakejson/blob/[main|master]/db.json');
    
    return ( 
        <div className="home">
            {error&& <div>{error}</div>}
            {ispending&&<div>loading....</div>}
            {blogs&&<BlogList blogs={blogs} title="ALL BLOGS"  />}
            
            
        </div>
     );
}
 
export default Home;
