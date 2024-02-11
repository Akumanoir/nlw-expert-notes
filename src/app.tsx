import { useState } from "react";
import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

interface Note {
  id: string,
  date: Date,
  content: string
}

export function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: new Date(),
      content: "Hello World",
    },
    {
      id: 2,
      date: new Date(),
      content: "Hello World",
    },
  ]);

  function onNoteCreated(content: string) {
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content,
    };

    setNotes([newNote, ...notes]);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="logo da nlw expert" />
      <form className="w-full" action="">
        <input type="text" placeholder="Busque em suas notas..." name="" id="" className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none" />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
