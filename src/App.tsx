import { Helmet } from 'react-helmet';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={'it is a description'} />
        <meta property="og:title" content={'a title'} />
        <meta property="og:description" content={'it is a description'} />
        <meta property="og:url" content={'https://www.vivi.page/'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={'a title'} />
        <meta name="twitter:description" content={'it is a description'} />
        <title>Title</title>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
