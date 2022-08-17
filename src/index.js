import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/homepage';
import PostDetail from './pages/postDetail';
import ProfilePage from './pages/profilePage';
import AlbumPhotosPage from './pages/albumPhotosPage';
import EnlargedPhotoPage from './pages/enlargedPhotoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/post-detail" element={<PostDetail />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/album-photos" element={<AlbumPhotosPage />} />
        <Route exact path="/enlarged-photo" element={<EnlargedPhotoPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
