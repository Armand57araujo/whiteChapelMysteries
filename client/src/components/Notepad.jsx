import { useState } from 'react';



const Notepad = () => {

  const [text, setText] = useState(localStorage.getItem('notes') || '');

  const handleInputChange = (e) => setText(e.target.value);
  const handleFocusLoss = (e) => localStorage.setItem('notes', text);



  return (
    <>
    <div id='notepad-outer'>
      <textarea id='notepad-inner' onBlur={handleFocusLoss} onChange={handleInputChange} value={text} cols={17} rows={10}>
      </textarea>
    </div>
    
    </>
  );
}


export default Notepad;