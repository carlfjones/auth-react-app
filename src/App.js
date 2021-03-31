import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage'
import TopNavbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <TopNavbar />
        <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
