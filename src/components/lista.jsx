import React from 'react'
import { lista } from './services/lista'

export const Lista = () => {
  return (
    <div>
        <ul>
        {lista.map((nameUser, id) => (
          <li key={id}>{item}</li>
        ))}
        </ul>
    </div>
  )
}