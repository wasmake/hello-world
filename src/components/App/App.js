import React, { createContext} from 'react';
import './App.css';
import Home from '../../pages/home';
import Episodes from '../../pages/episodes';
import Pokemones from '../../pages/pokemones';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Test from '../../pages/test';
import Disney from '../../pages/disney';
import PostCreate from '../../pages/post/create';
import Blog from '../../pages/blog';
import PostView from '../../pages/post/view';

export const GradesContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="/disney" element={<MainLayout />} >
          <Route index element={<Disney />} />
        </Route>
        <Route path="/pokemones" element={<MainLayout />} >
          <Route index element={<Pokemones />} />
        </Route>
        <Route path="/episodes" element={<MainLayout />} >
          <Route index element={<Episodes />} />
        </Route>
        <Route path="/test" element={<MainLayout />} >
          <Route path=":param" element={<Test />} />
        </Route>
        <Route path="/blog" element={<MainLayout />} >
          <Route index element={<Blog />} />
        </Route>
        <Route path="/post" element={<MainLayout />} >
          <Route path=":id" element={<PostView />} />
          <Route path="create" element={<PostCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;