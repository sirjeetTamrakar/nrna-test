import App from 'App';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from 'redux/store';
import reportWebVitals from 'reportWebVitals';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <ErrorBoundary>
//   <Provider store={Store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
//   // </ErrorBoundary>
// );

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
}
reportWebVitals();
