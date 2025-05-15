import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //default value which is available in out context
    themeMode: "dark",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}