import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import LoginAndRegistration from './components/login-and-registration/login-and-registration';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/account" component={LoginAndRegistration} />
      </Switch>
    </div>
  );
}

export default App;
