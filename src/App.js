import { BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/NavMain";
import {Switch} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import { Route } from "react-router-dom";
import ContentDisplay from "./components/ContentDisplay/ContentDisplay";
function App() {
  return (
    <BrowserRouter>
     <Header />
     <div className="App">
       <Container>
         <Switch>
           <Route path='/' component={Trending} exact/>
           <Route path='/movies' component={Movies}/>
           <Route path='/series' component={Series}/>
           <Route path='/search' component={Search}/>
         </Switch>

       </Container>
     </div>
     
     <SimpleBottomNavigation />
    </BrowserRouter>

  );
}

export default App;
