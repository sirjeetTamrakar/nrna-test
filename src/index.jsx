import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from 'redux/store';
import reportWebVitals from 'reportWebVitals';
import App from 'App';
import ErrorBoundary from 'utils/ErrorBoundary';

// Main Component That Gets Mounted To The DOM

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);
reportWebVitals();
