import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import UserComponent from './components/UserComponent';
import AccountComponent from './components/AccountComponent';
import TransactionComponent from './components/TransactionComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/dashboard" element={<UserComponent />} />
        <Route path="/account/:accountNumber" element={<AccountComponent />} />
        <Route path="/transactions/:username" element={<TransactionComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
