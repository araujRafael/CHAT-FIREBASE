import React, { createContext, ReactNode, SetStateAction, useContext } from "react";
import { DarkTheme } from '../../themes/theme';

interface TypeThemeContext {
  isDark: String;
  changeTheme: Boolean;
  setChangeTheme: React.Dispatch<SetStateAction<boolean>>;
}

const initialValue = {
  isDark: '',
  changeTheme: false,
  setChangeTheme: () => { }
}

const ThemeContext = createContext<TypeThemeContext>(initialValue)
export const useThemeContext = () => useContext(ThemeContext)

// Provider
interface ProviderProps {
  children: ReactNode | JSX.Element;
}
export const ThemeContextProvider = ({ children }: ProviderProps) => {
  const [changeTheme, setChangeTheme] = React.useState(false)
  const isDark = changeTheme ? DarkTheme : '';


  return (
    <ThemeContext.Provider value={{ isDark, changeTheme, setChangeTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}
