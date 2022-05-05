import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute";
import { AuthContextProvider } from "./Context/AuthContext";
import ChatContextProvider from "./Context/ChatContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { Home } from "./Pages/Home";
// Pages
import { SignIn } from "./Pages/SignIn";
import { GlobalCSS } from "./themes/GlobalCSS";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AppRoutes: React.FC = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <ChatContextProvider>
          <BrowserRouter >
            <Routes >
              <Route path="/" element={<SignIn />} />
              <Route path="/home" element={<PrivateRoute element={<Home />} />} />
            </Routes>
            {GlobalCSS()}
          </BrowserRouter>
        </ChatContextProvider>
      </AuthContextProvider >
      <ToastContainer />
    </ThemeContextProvider>
  )
}

