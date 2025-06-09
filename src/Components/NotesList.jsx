import React, { useState, useEffect, useRef } from 'react';
import {anticipate, motion} from 'motion/react'

const NotesList = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const isFirstRender = useRef(true);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    const storedNotes = localStorage.getItem("getNote");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("getNote", JSON.stringify(notes));
  }, [notes]);

  const saveNote = () => {
    if (note.trim() === "") return;
    setNotes([...notes, note]);
    setNote('');
  };

  const DelNotes = (delIndex) => {
    setNotes(notes.filter((_, index) => index !== delIndex));
  };

  const EditNote = (index) => {
    setEditIndex(index);
    setEditText(notes[index]);
  };

  const handleEditNote = () => {
    const updatedNotes = [...notes];
    updatedNotes[editIndex] = editText;
    setNotes(updatedNotes);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <>
      <motion.h1 
      initial={{x:-200,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{delay:0.1,duration:0.3}}
      className='text-4xl text-center p-4 font-medium text-white'>Write Your Notes here</motion.h1>
      <hr className="border-t-4 border-amber-900" />

      <div className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-amber-400 rounded-tr-4xl rounded-bl-4xl flex flex-col justify-between md:p-4 md:m-4 p-8 mt-4 mr-4">
        <textarea
          id="message"
          rows="5"
          placeholder="Enter Your Note Here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="p-3 bg-white text-black rounded-md w-full resize-none break-words whitespace-pre-wrap"
        />
        <motion.button
        whileTap={{scale:0.95}}
              whileHover={{scale:1.05}}
          className="rounded-2xl bg-amber-700 p-2 mt-4 text-lg text-white hover:bg-amber-800"
          onClick={saveNote}
        >
          Add Note
        </motion.button>
      </div>

      <div className="flex flex-wrap gap-4 p-4 ">
        {notes.map((item, index) =>
          index === editIndex ? (
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.2,duration:0.5}}
            
            key={index} className="w-full sm:w-[45%] md:w-[30%] bg-white p-4 rounded hover:scale-105">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="p-2 border rounded w-full mb-2"
              />
              <motion.button
              whileTap={{scale:0.95}}
              whileHover={{scale:1.25}}
                className="rounded-2xl bg-amber-700 p-2 text-sm text-white"
                onClick={handleEditNote}
              >
                Save
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.2,duration:0.5}}
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] bg-amber-400 rounded-tr-4xl rounded-bl-4xl p-4 flex flex-col justify-between max-h-64 hover:scale-105"
            >
              <div className="overflow-y-auto break-words whitespace-pre-wrap text-black bg-white p-2 rounded mb-4 max-h-40">
                {item}
              </div>
              <div className="flex justify-between">
                <motion.button
                whileTap={{scale:0.95}}
              whileHover={{scale:1.25}}
                  className="rounded-2xl bg-amber-700 p-2 text-sm text-white"
                  onClick={() => EditNote(index)}
                >
                  Edit
                </motion.button>
                <motion.button
                whileTap={{scale:0.95}}
              whileHover={{scale:1.25}}
                  onClick={() => DelNotes(index)}
                  className="rounded-2xl bg-amber-700 p-2 text-sm text-white"
                >
                  Del
                </motion.button>
              </div>
            </motion.div>
          )
        )}
      </div>
    </>
  );
};

export default NotesList;
