import React, { useState } from 'react';
import './App.css';
import { AutoComplete, Space } from 'antd';

const DEFAULT_OPTIONS =  [
  {
  label: 'One',
  value: 'One'
  },
{
  label: 'Two',
  value: 'Two'
  },
  {
label: 'Three',
value: 'Three'
},
{
  label: 'Four',
  value: 'Four'
  },
]

function App() {

  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  const search = (searchedText) => {
    //API Call
    if (searchedText) {
    setOptions([
      ...DEFAULT_OPTIONS,
      {
      label: `${searchedText}`,
      value: `${searchedText}`,
        },
        {
      label: `${searchedText}${searchedText}`,
      value: `${searchedText}${searchedText}`,
      },
      {
        label: `${searchedText}${searchedText}${searchedText}`,
        value: `${searchedText}${searchedText}${searchedText}`,
        },
    ])
  } else {
    setOptions(DEFAULT_OPTIONS);
  }

  }

  return (
      <div className="App">
      <Space direction='vertical'>
        <span>INI ADALAH AUTOCOMPLETE YA COK!</span>
        <AutoComplete
          style={{ width: 230 }}
          placeholder="Ketik disini deh.."
          options={options}
          filterOption={true}
          onSelect={(value) => {
            console.log("Selected Value Is: ", value);
          }}
          onSearch={(value) => {
            console.log("Searched Text Is: ", value);
            search(value);
          }}
         />
         </Space>
      </div>
  );
};
export default App;