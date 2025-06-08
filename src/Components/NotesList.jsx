import React, { useState } from 'react';

const NotesList = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);


  const saveNote = ()=>{
    if(note.trim == "") return;
    setNotes([...notes, note]);
  }

  return (
    <>
      <h1 className='text-4xl text-center p-4 '>Write Your Notes here</h1>
      <hr className="border-t-4 border-amber-900 "/>
      <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-amber-400 rounded-tr-4xl rounded-bl-4xl flex flex-col justify-between md:p-4 md:m-4 p-8 mt-4 mr-4">
  <textarea
    id="message"
    rows="5"
    placeholder="Enter Your Note Here"
    value={note}
    onChange={(e) => setNote(e.target.value)}
    className="p-3 bg-white text-black rounded-md w-full resize-none break-words whitespace-pre-wrap"
  />
  <button
    className="rounded-2xl bg-amber-700 p-2 mt-4 text-lg text-white hover:bg-amber-800"
    onClick={saveNote}
  >
    Add Note
  </button>
</div>


       <div className="flex flex-wrap gap-4 p-4">
  {notes.map((item, index) => (
    <div
      key={index}
      className="w-full sm:w-[45%] md:w-[30%] bg-amber-400 rounded-tr-2xl rounded-bl-2xl p-4 flex flex-col justify-between max-h-64"
    >
      <div className="overflow-y-auto break-words whitespace-pre-wrap text-black bg-white p-2 rounded mb-4 max-h-40">
        {item}
      </div>
      <div className="flex justify-between">
        <button className="rounded-2xl bg-amber-700 p-2 text-sm text-white">
          Edit
        </button>
        <button className="rounded-2xl bg-amber-700 p-2 text-sm text-white">
          Del
        </button>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default NotesList;
