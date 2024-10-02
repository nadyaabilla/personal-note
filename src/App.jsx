import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Search from './components/Search';
import { getInitialData } from './utils/index';  // Import getInitialData
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),  // Mengambil data dari getInitialData
      searchTerm: '',
    };

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  addNoteHandler(note) {
    this.setState((prevState) => ({
      notes: [...prevState.notes, note],
    }));
  }

  deleteNoteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  }

  archiveNoteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  onSearchChangeHandler(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {
    const filteredNotes = this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div className="app-container">
        <header className="app-header">
          <h3>Aplikasi Catatan Pribadi</h3>
          <Search setSearchTerm={this.onSearchChangeHandler} />
        </header>
        <div className='border'>
          <NoteForm addNote={this.addNoteHandler} />
        </div>
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={filteredNotes.filter(note => !note.archived)}
          deleteNote={this.deleteNoteHandler}
          archiveNote={this.archiveNoteHandler}
        />
        {filteredNotes.filter(note => !note.archived).length === 0 && <p>Tidak ada catatan aktif</p>}
        
        <h2>Arsip Catatan</h2>
        <NoteList
          notes={filteredNotes.filter(note => note.archived)}
          deleteNote={this.deleteNoteHandler}
          archiveNote={this.archiveNoteHandler}
        />
        {filteredNotes.filter(note => note.archived).length === 0 && <p>Tidak ada catatan arsip</p>}
      </div>
    );
  }
}

export default App;
