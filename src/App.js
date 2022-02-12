import React from 'react';
import './App.scss';

import { CustomTextInput as TextInput, CustomTable as Table } from './customComponents';

function App() {
  return (
    <div className="App">
      <div className='inputfield-wrapper'>
        <TextInput search />
      </div>
      <Table />
    </div>
  );
}

export default App;
