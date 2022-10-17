import React, { useEffect, useState } from 'react';
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
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  },[])

  const handleNewSubs = (newSub:Sub)=>{
    setSubs(subs => [...subs,newSub])
  }

  return (
    <div className="App">
      <h1>Midu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSubs} />
    </div>
  );
}

export default App;
