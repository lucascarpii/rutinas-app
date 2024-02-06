import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import { Home } from './Home';
import { Profile } from './Profile';

const App = () => {
  const user = localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export { App };
