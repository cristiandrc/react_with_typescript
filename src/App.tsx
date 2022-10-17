import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types';

const INITIAL_STATE = [
  {
    nick:'Dapelu',
    subMonths:3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelo hace de moderador a veces'
  },
  {
    nick: 'sergio_serreno',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serreno'
  }
]


interface AppState {
  subs: Sub[]
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  },[])

  const handleNewSubs = (newSub:Sub)=>{
    setSubs(subs => [...subs,newSub])
    setNewSubsNumber(n => n + 1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs} />
      New Subs {newSubsNumber}
      <Form onNewSub={handleNewSubs} />
    </div>
  );
}

export default App;
