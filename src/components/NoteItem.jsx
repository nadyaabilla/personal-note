import React from 'react';
import { showFormattedDate } from '../utils/index';  
import '../styles/App.css'

const NoteItem = ({ note, deleteNote, archiveNote }) => {
  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p className='date'>{showFormattedDate(note.createdAt)}</p>
      <p>{note.body}</p>
      <div className="note-buttons">
        <button className='first' onClick={() => deleteNote(note.id)}>Hapus</button>
        <button className='seccond' onClick={() => archiveNote(note.id)}>
          {note.archived ? 'Pindahkan dari Arsip' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
