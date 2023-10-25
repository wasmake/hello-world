import React, { createContext, useState } from 'react';

import logo from '../../logo.svg';
import './App.css';
import Box from '../Box/Box';
import Home from '../../pages/home';

export const GradesContext = createContext();

function App() {
  const [usersWithGrades, setUsersWithGrades] = useState([
    {
      name: 'pepe',
      grade: 10
    },
    {
      name: 'pablo',
      grade: 9
    }
  ]);

  return (
    <GradesContext.Provider value={{ usersWithGrades, setUsersWithGrades }}>
      <Home />
    </GradesContext.Provider>
  );
}

export default App;