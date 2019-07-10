import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CountProvider from './context';

class Main extends React.Component {
  render() {
    return (
      <CountProvider>
        <App />
      </CountProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
