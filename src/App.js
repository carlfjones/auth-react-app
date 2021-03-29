import './App.css';
import { Card } from 'react-bootstrap'
import Homepage from './components/Homepage'
import TopNavbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Homepage />

    </div>
  );
}

export default App;
