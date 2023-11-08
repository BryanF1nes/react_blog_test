import Navbar from './components/Navbar';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="content">
          <Outlet />
        </div>
    </div>
  );
}

export default App;