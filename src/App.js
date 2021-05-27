import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import TryThis from './TryThis';


function App() {

  const [submit, setSubmit] = useState('');
  const [text, setText] = useState('');

  return (
    <div className="App">
      <TryThis 
        submit={submit}
        setSubmit={setSubmit}
      />
      <Form 
      submit={submit}
      setSubmit={setSubmit}
      text={text}
      setText={setText}
      />
      
    </div>
  );
}

export default App;
