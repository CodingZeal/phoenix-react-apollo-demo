import React, { Component } from 'react'
import { Checkbox, Input } from 'react-toolbox'

export default function Todo(props) {
  const {
    completed,
    text,
    onChange,
    onToggle
  } = props

  return (
    <div>
      <Checkbox checked={completed} onChange={onToggle} />
      <Input value={text} onChange={onChange} />
    </div>
  )
}
