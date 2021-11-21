import React, { forwardRef, useCallback } from 'react'
import classnames from 'classnames'

import Grid from '../../Layout/Grid/Grid.component'

import { RadioButtonProps } from './RadioButton.types'

import LabelStyles from './RadioButton.theme'

const RadioButton = forwardRef<HTMLLabelElement, RadioButtonProps>((props, ref) => {
  const { className, onClick, callbackValue, checked, disabled, name } = props

  const handleChange = useCallback(
    (event) => {
      onClick?.(event, callbackValue)
    },
    [onClick, callbackValue]
  )

  return (
    <LabelStyles ref={ref}>
      <input
        type="radio"
        name={name}
        className={className}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
      <span className={classnames('checkmark', { ['checkmark-diabled']: disabled })}></span>
    </LabelStyles>
  )
})

export default RadioButton
