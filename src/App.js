import { Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import Home from './pages/Home';
import Document from './pages/Document';
import Pricing from './pages/Pricing';
import Missing from './pages/Missing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='document' element={<Document />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
