import React, { forwardRef, useCallback } from "react";

import Grid from "../../Layout/Grid/Grid.component";

import { ButtonProps } from './Button.types';

import ButtonStyles from './Button.theme';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    onClick,
    callbackValue,
    disabled,
    startIcon,
    endIcon,
    width,
    maxWidth,
    minWidth,
    fullWidth,
    height,
    padding,
    backgroundColor,
    textColor,
    size,
    hoverColor,
    margin,
  } = props;

  const handleClick = useCallback((e) => {
    const event = e;
    onClick?.(callbackValue, event);
  }, [onClick, callbackValue]);

  return (
    <ButtonStyles
      ref={ref}
      className={className}
      onClick={handleClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
      hoverColor={hoverColor}
      margin={margin}
    >
      {
        startIcon ? (
          <Grid className="icon-wrapper">
            {startIcon}
            {children}
          </Grid>
        )
        :
        children
      }
    </ButtonStyles>
  );
});

Button.defaultProps = {
  startIcon: undefined,
};

export default Button;