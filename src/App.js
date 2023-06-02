import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthContextProvider from './context/AuthContext';
import Routes from './pages/Routes'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>

      <ToastContainer />
    </>
  );
}

export default App;
