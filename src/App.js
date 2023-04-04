
import Header from './components/header/Header';
import './App.css';
import { StyleProvider } from './contexts/StyleContext';
import {useLocalStorage} from "./hooks/useLocalStorage";
import Home from './components/home/Home';

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="App">
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header/>
        <Home/>
      </StyleProvider>
    </div>
  );
}

export default App;
