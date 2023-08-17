import { CssBaseline, ThemeProvider } from '@mui/material';
import 'index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RouteList from 'routes';
import theme from 'themes';
import './styles/main.scss';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteList />
      <ToastContainer autoClose={4000} limit={3} draggablePercent={50} />
    </ThemeProvider>
  );
}
