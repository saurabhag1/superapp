import { useState, useEffect } from 'react';
import StyleNotes from './Notes.module.css';


const Notes = () => {



  const [text, setText] = useState("This is how I am going to learn MERN Stack in next 3 months.");

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    localStorage.setItem('savedText', newText);  
  };


  useEffect(() => {
    const savedText = localStorage.getItem('savedText');
    if (savedText) {
      setText(savedText);
    }
  }, []); 



  return (
    <>
    <div className={`${StyleNotes.notes}`}>
        <div>
        All notes
        </div>
        <textarea className={`${StyleNotes.takeNotes}`} value={text} onChange={handleChange}/>
        {/* This is how I am going to learn
        MERN Stack in next 3 months. */}
        {/* </textarea> */}
    </div>
    </>
  )
}

export default Notes