import React, { useState } from 'react';

import logo from '../../logo.svg';
import './App.css';
import Box from '../Box/Box';

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

  function addUser() {
    const userValue = document.getElementById('user').value;
    const gradeValue = Number(document.getElementById('grade').value);

    setUsersWithGrades([...usersWithGrades, {
      name: userValue,
      grade: gradeValue
    }]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          usersWithGrades.map((user, index) => {
            return <Box key={index} user={user.name} grade={user.grade} />
          })
        }
      </header>
    </div>
  );
}

export default App;