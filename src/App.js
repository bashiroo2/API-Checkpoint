import React from 'react';
import UserList from './UserList';
import "./styles.css";

// The main component that represents our application
function App() {
  return (
    <div className="App">
      {/* Render the UserList component */}
      <UserList />
    </div>
  );
}

// Make the App component available for other modules to import
export default App;
