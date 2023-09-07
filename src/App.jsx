import { CssBaseline, ThemeProvider } from '@mui/material';
import 'index.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setGlobalUser } from 'redux/auth/actions';
import RouteList from 'routes';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import theme from 'themes';
import './styles/main.scss';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getSiteSettings());
    dispatch(setGlobalUser());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouteList />
        <ToastContainer autoClose={4000} limit={3} draggablePercent={50} />
      </ThemeProvider>
    </>
  );
}
