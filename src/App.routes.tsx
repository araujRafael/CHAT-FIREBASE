import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute";
import { AuthContextProvider } from "./Context/AuthContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { Home } from "./Pages/Home";
// Pages
import { SignIn } from "./Pages/SignIn";
import { GlobalCSS } from "./themes/GlobalCSS";


export const AppRoutes: React.FC = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <BrowserRouter >
          <Routes >
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          </Routes>
          {GlobalCSS()}
        </BrowserRouter>
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}

