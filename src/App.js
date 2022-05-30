import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ProfilePage from 'components/ProfilePage';
import ProfilesContextProvider from './components/ProfilesContextProvider';
import './styles.css';

const App = () => {
  return (
    <ProfilesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />}>
            <Route path=":id" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfilesContextProvider>
  );
};

export default App;
