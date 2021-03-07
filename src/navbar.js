import {Link} from 'react-router-dom';
const navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><Link to="/">The Last Page</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default navbar;