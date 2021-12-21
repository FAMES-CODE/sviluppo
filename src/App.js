import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import Mainpage from './components/main/Main'
import Navbar from './components/navbar/Navbar';
import Error from './components/404/Error';


//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/">
              <Mainpage />
           </Route>

           <Route exact path="/navbar">
              <Navbar />
           </Route>

           <Route exact path="*/:parms">
              <Error />
           </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
