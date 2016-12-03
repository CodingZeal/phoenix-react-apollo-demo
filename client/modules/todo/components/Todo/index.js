/* @flow */
import React from 'react'

import Checkbox from 'react-toolbox/lib/checkbox/Checkbox'
import Input from 'react-toolbox/lib/input/Input'

export default function Todo(
  { completed, text, onChange, onToggle }: {
    completed?: boolean,
    text?: string,
    onChange: () => void,
    onToggle: () => void
  }
) {
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
