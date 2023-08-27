import { CssBaseline, ThemeProvider } from '@mui/material';
import { getAdvice } from 'components/locals/dashboard/advice/redux/actions';
import { getEvents } from 'components/locals/dashboard/events/redux/actions';
import { getCountries, getNCC } from 'components/locals/dashboard/ncc/redux/actions';
import { getNews } from 'components/locals/dashboard/news/redux/actions';
import { getAllQuestions } from 'components/locals/dashboard/survey/redux/actions';
import 'index.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUsers, setGlobalUser } from 'redux/auth/actions';
import { getContact, getSiteSettings } from 'redux/homepage/actions';
import RouteList from 'routes';
import theme from 'themes';
import './styles/main.scss';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteSettings());
    dispatch(getNews());
    dispatch(getEvents());
    dispatch(getUsers());
    dispatch(getNCC());
    dispatch(getAllQuestions());
    dispatch(getCountries());
    dispatch(getAdvice());
    dispatch(getContact());
    dispatch(setGlobalUser());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouteList />
      <ToastContainer autoClose={4000} limit={3} draggablePercent={50} />
    </ThemeProvider>
  );
}
