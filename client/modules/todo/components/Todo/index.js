/* @flow */
import React from 'react'

import { themr } from 'react-css-themr';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox'
import Input from 'react-toolbox/lib/input/Input'

import todoTheme from './theme.scss'

type TodoTheme = {
  checkbox: string,
  input: string,
  todo: string,
}

function Todo(
  { completed, text, theme, onChange, onToggle }: {
    completed?: boolean,
    text?: string,
    theme: TodoTheme,
    onChange: () => void,
    onToggle: () => void
  }
) {
  return (
    <div className={theme.todo}>
      <div className={theme.checkbox}>
        <Checkbox
            checked={completed}
            onChange={onToggle} />
      </div>

      <div className={theme.input}>
        <Input
            defaultValue={text}
            onChange={onChange} />
      </div>
    </div>
  )
}

export default themr('', todoTheme)(Todo)
