import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, deleteNote, archiveNote }) => {
  return (
    <div className='cover'>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} archiveNote={archiveNote} />
      ))}
    </div>
  );
};

export default NoteList;
