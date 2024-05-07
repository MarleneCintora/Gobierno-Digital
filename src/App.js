import { UserProvider } from './context/UserContext';
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import Detail from "./components/Detail"
import AppPokebar from './components/AppPokebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: '#3f50b5', 
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#F63928',
      contrastText: '#000',
    },
  },
});
const App = () => (
  <ThemeProvider theme={darkTheme}>
    <UserProvider>
      <CssBaseline />
      <AppPokebar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="details/:Id" element={<Detail />} />
        </Route>
      </Routes>
    </UserProvider>
  </ThemeProvider>
);

export default App;
