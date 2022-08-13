import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './site/Layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;