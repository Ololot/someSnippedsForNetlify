import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Content />
      </HashRouter>
    </div>
  );
}

export default App;
