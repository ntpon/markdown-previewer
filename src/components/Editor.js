import React, { useState } from 'react';

function Editor(props) {
  const [numberGutter, setNumberGutter] = useState(1);
  const inputHandler = (e) => {
    const numberOfEnter = e.target.value.split(/\r|\r\n|\n/).length;
    setNumberGutter(numberOfEnter);

    props.textareaHandler(e);
  };
  return (
    <div className='editor'>
      <ul className='editor__gutter'>
        {[...Array(numberGutter)].map((e, i) => (
          <li className='editor__gutter--cell'>{i + 1}</li>
        ))}
      </ul>
      <div className='editor__content'>
        <textarea name='text' id='text' onChange={inputHandler}></textarea>
      </div>
    </div>
  );
}

export default Editor;
