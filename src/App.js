import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import AddLink from './pages/AddLink';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listpage' element={<ListPage />} />
            <Route path='/addLink' element={<AddLink />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;