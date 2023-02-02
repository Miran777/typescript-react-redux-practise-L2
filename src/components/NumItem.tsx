import React from 'react'
import { useAppDispatch } from '../hook'
import { removeNumber } from '../store/pageSlice'

interface NumItemProps {
    id: number,
    title: string,
}

export const NumItem: React.FC<NumItemProps> = ({id, title}) => {
    const dispatch = useAppDispatch()

  return (
    <li className='numItem'>
        <h2>{id}. {title}</h2>
        <button onClick={() => dispatch(removeNumber(id))}>delete</button>
    </li>
  )
}
