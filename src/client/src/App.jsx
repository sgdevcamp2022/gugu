import React from 'react';
import './App.css';

import SettingContainer from './setting/SettingContainer';

function App() {
  return (
    <div className="App">
      <SettingContainer settingType="server" />
    </div>
  );
}

export default App;
