import './App.css';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category></Category>
        <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
