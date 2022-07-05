import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
