import React from 'react';

const StyledInput = styled.div<any>`
  &.focus>div:after {
    transform: scaleX(1);
  }
  &.focus>div:before {
    border-bottom: '2px solid #000000de',
  }
  &.focus>label {
    color: '#80491f',
  }
  &:not(.focus)>div:hover:before {
    border-bottom: '2px solid #000000de',
  }
  display: inline-block;
  position: relative;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
`;

const Label = styled.label`
  left: 0;
  position: absolute;
  top: 0;
  transform: scale(0.75);
  transform-origin: top left;
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
`;

const Padding = styled.div`
  &:after {
    border-bottom: 2px solid #80491f;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  }
  &:before {
    border-bottom: 1px solid #0000006b;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  margin-top: 14px;
  position: relative;
`;

const InputBody = styled.input`
  &:focus {
    outline: 0;
  }
  background: none;
  border: none;
  box-sizing: content-box;
  color: currentColor;
  display: block;
  height: 1.1875em;
  margin: 0;
  min-width: 0;
  padding: 6px 0 7px;
  width: 100%;
`;

const Input: React.FC<InputProps> = ({
  fullWidth,
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
    <StyledInput
      className={focusClassName}
      fullWidth={fullWidth}
    >
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

export interface InputProps {
  fullWidth?: boolean;
  id?: string;
  label: string;
  onBlur?;
  onFocus?;
  placeholder?: string;
  type?: string;
  [prop: string]: any;
}
