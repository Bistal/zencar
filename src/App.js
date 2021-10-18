import React from 'react';
import Files from './client/components/files/Files'
import Types from './client/components/types/Types'
import Users from './client/components/users/Users'

function App() {
  return (
    <div className="App">
      <Users/>
      <Types/>
      <Files/>
    </div>
  );
}

export default App;
