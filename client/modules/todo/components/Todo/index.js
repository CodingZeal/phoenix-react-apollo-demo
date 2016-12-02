import React, { Component } from 'react'
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox'
import Input from 'react-toolbox/lib/input/Input'

export default function Todo(props) {
  const {
    completed,
    text,
    onChange,
    onToggle
  } = props

  return (
    <div>
      <Checkbox
          checked={completed}
          onChange={onToggle} />
      <Input
          defaultValue={text}
          onChange={onChange} />
    </div>
  )
}
