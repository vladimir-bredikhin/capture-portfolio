import { Route, Switch } from 'react-router';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import OurWork from './pages/OurWork';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/' component={AboutUs} />
        <Route exact path='/work' component={OurWork} />
        <Route path='/work/:id' component={MovieDetail} />
        <Route path='/contact' component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
