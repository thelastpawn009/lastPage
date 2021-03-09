
import BlogList from "./blogList";
import useFetch from "./usefetch";

const Home = () => {
    
   const {data:blogs,error,ispending}=useFetch('https://gist.githubusercontent.com/thelastpawn009/ca9d9d824e290b87286dd4056978f1bf/raw/5dacd753df58839b5c0b55b87cb4e891e8ba3bd9/db.json');
    
    return ( 
        <div className="home">
            {error&& <div>{error}</div>}
            {ispending&&<div>loading....</div>}
            {blogs&&<BlogList blogs={blogs} title="ALL BLOGS"  />}
            
            
        </div>
     );
}
 
export default Home;
