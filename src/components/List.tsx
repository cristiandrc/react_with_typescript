import React from 'react'
import { Sub } from '../types'

interface Props {
  subs: Sub[]
}

const List = ({subs}:Props) => {

  const renderList = (): JSX.Element[] => {
    return subs?.map(sub => (
      <li key={sub.nick}>
        <img src={`https://i.pravatar.cc/150?u${sub.avatar}`} alt="avatar" />
        <h4>{sub.nick} (<small>{sub.subMonths}</small>) </h4>
        <p>{sub.description?.substring(0,100)}</p>
      </li>
    ))
  }
  return (
    <ul>
    {
      renderList()
    }
  </ul>
  )
}

export default List
