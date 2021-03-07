
import  {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './navbar';
import Home from './home'
import Create from './Create';
import Blogdetails from './Blogdetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <Blogdetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
