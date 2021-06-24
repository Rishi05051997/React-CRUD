import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Layout/Navbar';
import NotFound from './components/pages/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import ViewUser from './components/Users/ViewUser';

function App() {
  return (
    < BrowserRouter>
      <div>
        {/* <h1>Hello World</h1> */}
        < Navbar />
        < Switch>
          < Route exact path="/" component={Home} />
          < Route exact path="/about" component={About} />
          < Route exact path="/contact" component={Contact} />
          < Route exact path="/users/add" component={AddUser} />
          < Route exact path="/users/edit/:id" component={EditUser} />
          < Route exact path="/users/view/:id" component={ViewUser} />
          < Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
