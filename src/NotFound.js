import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>ERROR 404 !!!</h2>
            <p>Sorry page not found</p>
            <p className="link">
                <Link to ="/">Back to Home</Link>
            </p>
        </div>

     );
}
 
export default NotFound;
 
