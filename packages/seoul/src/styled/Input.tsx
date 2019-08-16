import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div({
  '&.focus>div:after': {
    transform: 'scaleX(1)',
  },
  '&.focus>div:before': {
    borderBottom: '2px solid #000000de',
  },
  '&.focus>label': {
    color: '#80491f',
  },
  '&:not(.focus)>div:hover:before': {
    borderBottom: '2px solid #000000de',
  },
  display: 'inline-block',
  position: 'relative',
});

const Label = styled.label({
  left: 0,
  position: 'absolute',
  top: 0,
  transform: 'scale(0.75)',
  transformOrigin: 'top left',
  transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
});

const Padding = styled.div({
  '&:after': {
    borderBottom: '2px solid #80491f',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    transform: 'scaleX(0)',
    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
  },
  '&:before': {
    borderBottom: '1px solid #0000006b',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  marginTop: 16,
  position: 'relative',
});

const InputBody = styled.input({
  '&:focus': {
    outline: 0,
  },
  background: 'none',
  border: 'none',
  boxSizing: 'content-box',
  color: 'currentColor',
  display: 'block',
  height: '1.1875em',
  margin: 0,
  minWidth: 0,
  padding: '6px 0 7px',
  width: '100%',
});

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  ...props
}) => {
  const { onBlur, onFocus, ...rest } = props;
  const [focusClassName, setFocusClassName] = React.useState('');
  const handleBlurInput = React.useCallback((e) => {
    if (onBlur !== undefined) {
      onBlur(e);
    }
    setFocusClassName('');
  }, []);
  const handleFocusInput = React.useCallback((e) => {
    if (onFocus !== undefined) {
      onFocus(e);
    }
    setFocusClassName('focus');
  }, []);

  return (
    <StyledInput className={focusClassName}>
      <Label
        {...(id && { htmlFor: id })}
        htmlFor={id}
      >
        {label}
      </Label>
      <Padding>
        <InputBody
          onBlur={handleBlurInput}
          onFocus={handleFocusInput}
          type={type}
          {...(id && { id })}
          {...rest}
        />
      </Padding>
    </StyledInput>
  );
};

export default Input;

interface InputProps {
  id?: string;
  label: string;
  onBlur?;
  onFocus?;
  type?: string;
  [prop: string]: any;
}
