// export default function TexBox() {
//     // Store Title and Text Box input on refresh
//     function storageAvailable(type) {
//         var storage;
//         try {
//             storage = window[type];
//             var x = '__storage_test__';
//             storage.setItem(x, x);
//             storage.removeItem(x);
//             return true;
//         } catch (e) {
//             return e instanceof DOMException && (
//                     // everything except Firefox
//                     e.code === 22 ||
//                     // Firefox
//                     e.code === 1014 ||
//                     // test name field too, because code might not be present
//                     // everything except Firefox
//                     e.name === 'QuotaExceededError' ||
//                     // Firefox
//                     e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//                 // acknowledge QuotaExceededError only if there's something already stored
//                 (storage && storage.length !== 0);
//         }
//     }

//     var inputTitle = document.getElementById('title-text-box');
//     var inputTextBox = document.getElementById('textarea');

//     if (!localStorage.getItem('title-text-box', 'textarea')) {
//         populateStorage();
//     } else {
//         setInput();
//     }

//     function populateStorage() {
//         localStorage.setItem('title-text-box', document.getElementById('title-text-box').value);
//         localStorage.setItem('textarea', document.getElementById('textarea').value);
//     }

//     function setInput() {
//         var currentText = localStorage.getItem('title-text-box');
//         var currentTextArea = localStorage.getItem('textarea');

//         document.getElementById('title-text-box').value = currentText;
//         document.getElementById('textarea').value = currentTextArea;
//     }

//     inputTitle.onchange = populateStorage;
//     inputTextBox.onchange = populateStorage;


// }

// import React, { useState, useEffect } from "react";

// const TextBox = () => {
//   const [notes, setNotes] = useState([]);
//   const [noteEditing, setNoteEditing] = useState("");

//   useEffect(() => {
//     const json = JSON.stringify(notes);
//     localStorage.setItem("notes", json);
//   }, [notes]);

//   useEffect(() => {
//     const json = localStorage.getItem("notes");
//     const savedNotes = JSON.parse(json);
//     if (savedNotes) {
//       setNotes(savedNotes);
//     }
//   }, []);

//   const addNote = (e) => {
//     e.preventDefault();
//     const newNote = {
//       id: Math.random().toString(36).substr(2, 9),
//       text: e.target.note.value,
//     };
//     setNotes([...notes, newNote]);
//     e.target.note.value = "";
//   };

//   const deleteNote = (idToDelete) => {
//     const filteredNotes = notes.filter((note) => note.id !== idToDelete);
//     setNotes(filteredNotes);
//   };

//   const submitEdits = (event, idToEdit) => {
//     event.preventDefault();
//     const updatedNotes = notes.map((note) => {
//       if (note.id === idToEdit) {
//         return {
//           id: note.id,
//           text: event.target.note.value,
//         };
//       } else {
//         return note;
//       }
//     });
//     setNotes(updatedNotes);
//     setNoteEditing("");
//   };


//   return (
//     <div className="textbox">
//       <h1>localStorage Demo</h1>
//       <form onSubmit={addNote}>
//         <input type="text" name="note" />
//         <input type="Submit" />
//       </form>
//       {notes.map((note) => (
//         <div key={note.id}>
//           {note.id !== noteEditing ? (
//             <div>{note.text}</div>
//           ) : (
//               <form onSubmit={(e) => submitEdits(e, note.id)}>
//                 <textarea name="note" defaultValue={note.text}></textarea>
//                 <button type="Submit"> Submit Edits</button>
//               </form>
//             )}
//           <button onClick={() => deleteNote(note.id)}>delete</button>
//           <button onClick={() => setNoteEditing(note.id)}>edit</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TextBox;

// import React from 'react';
// import Moment from 'react-moment';

// export default class TextBox extends React.Component {
//   render() {
//     const dateToFormat = '1976-04-19T12:59-0500';
//     return (

//       <Moment>{dateToFormat}</Moment>
//     );
//   }
// }
