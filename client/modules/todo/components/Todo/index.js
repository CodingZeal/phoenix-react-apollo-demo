import React from 'react'
import { themr } from 'react-css-themr'
import { HotKeys } from 'react-hotkeys'
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox'
import Input from 'react-toolbox/lib/input/Input'

import todoTheme from './theme.scss'

function Todo({ completed, title, theme, onChange, onDelete, onToggle }) {
  const keyMap = {
    deleteEmptyTodo: 'backspace',
    forceDeleteTodo: 'shift+backspace'
  }
  const handlers = {
    deleteEmptyTodo: e => e.target.value === '' ? onDelete(e) : e,
    forceDeleteTodo: e => onDelete(e.preventDefault())
  }

  return (
    <div className={theme.todo}>
      <div className={theme.checkbox}>
        <Checkbox checked={completed} onChange={onToggle} />
      </div>

      <div className={theme.input}>
        <HotKeys keyMap={keyMap} handlers={handlers}>
          <Input defaultValue={title} onChange={onChange} />
        </HotKeys>
      </div>
    </div>
  )
}

export const ThemedTodo = themr('', todoTheme)(Todo)

export default ThemedTodo
