import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import { HashRouter, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
