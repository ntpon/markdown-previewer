import { useState } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import Preview from './components/Preview';

function App() {
  const [text, setText] = useState('');
  const textareaHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <Header />
      <div className='container'>
        <Editor textareaHandler={textareaHandler} />
        <Preview text={text} />
      </div>
    </div>
  );
}

export default App;
