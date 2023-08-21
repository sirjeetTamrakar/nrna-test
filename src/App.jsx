import { CssBaseline, ThemeProvider } from '@mui/material';
import 'index.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSiteSettings } from 'redux/homepage/actions';
import RouteList from 'routes';
import theme from 'themes';
import './styles/main.scss';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteSettings());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteList />
      <ToastContainer autoClose={4000} limit={3} draggablePercent={50} />
    </ThemeProvider>
  );
}
