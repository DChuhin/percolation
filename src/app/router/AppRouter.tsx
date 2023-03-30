import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PercolationPage from 'pages/percolation/PercolationPage';
import HomePage from 'pages/home/HomePage';
import TestPage from 'pages/test/TestPage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/percolation' element={<PercolationPage />} />
      <Route path='/test' element={<TestPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
