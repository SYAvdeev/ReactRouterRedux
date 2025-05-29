import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import {Header} from "./components/Header.tsx";
import withAuthentication from './components/withAuthenticationHOC.tsx'


const App: React.FC = () => {
    
    const HeaderWithAuthentication = withAuthentication(Header);
    const HomePageWithAuthentication = withAuthentication(HomePage);
    const RegisterWithAuthentication = withAuthentication(Register);
    const LoginWithAuthentication = withAuthentication(Login);
    
  return (
      <BrowserRouter>
          <HeaderWithAuthentication/>
          <Routes>
              <Route path="/" element={<HomePageWithAuthentication />} />
              <Route path="/register" element={<RegisterWithAuthentication />} />
              <Route path="/login" element={<LoginWithAuthentication />} />
              <Route path="*" element={<NotFound />} /> {/* Страница 404 */}
          </Routes>
      </BrowserRouter>
  )
}

export default App
