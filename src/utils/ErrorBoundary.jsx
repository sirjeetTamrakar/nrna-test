/* eslint-disable */
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const debug = import.meta.env.VITE_APP_DEBUG_MODE;

    if (hasError && !debug) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New,monospace'
          }}>
          <div style={{ textAlign: 'center' }}>
            <h2>There was an error in loading this page. </h2>
            <h2
              style={{
                cursor: 'pointer',
                color: '#0077FF',
                textDecoration: 'underline'
              }}
              onClick={() => {
                window.location.reload();
              }}>
              Reload this page
            </h2>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
