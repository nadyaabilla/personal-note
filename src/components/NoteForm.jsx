import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    addNote({
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={50} // Limit karakter
        placeholder="Judul"
        className='form-input'
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Isi Catatan"
        className='form-input'
        rows={5}
      />
      <button className='first' type="submit">Tambah Catatan</button>
    </form>
  );
};

export default NoteForm;
