import React, { useEffect, useState } from 'react';
import './App.css';

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

interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}

interface AppState {
  subs: Sub[]
}

function App() {
  const [subs, setSubs] = useState<AppState['subs']>()

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  },[])

  return (
    <div className="App">
      <h1>Midu subs</h1>
      <ul>
        {
          subs?.map(sub => (
            <li key={sub.nick}>
              <img src={sub.avatar} alt="avatar" />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>) </h4>
              <p>{sub.description?.substring(0,100)}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
