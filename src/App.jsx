import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DeveloperDetails from './pages/DeveloperDetails.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={localStorage.getItem('access_token') ? <Index /> : <Navigate to="/login" />} />
        <Route path="/developer/:id" element={<DeveloperDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;