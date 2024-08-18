import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ReactQueryPage from './ReactQueryPage';
import NormalPage from './NormalPage';


function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: "beige", padding: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Homepage
        </Link>
        <Link to="/normal-fetch" style={{ marginRight: "10px" }}>
          normal fetch
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/normal-fetch" element={<NormalPage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
