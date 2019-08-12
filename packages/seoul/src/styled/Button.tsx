import styled from 'styled-components';

const CommonButton = styled.button<any>(({
  disabled,
}) => ({
  '&:hover': disabled ? {} : {
    color: '#d6d6d6 ',
    transition: 'all 0.3s',
  },
  border: 'none',
  cursor: disabled ? 'default' : 'pointer',
  display: 'inline-block',
  fontWeight: 500,
  letterSpacing: '0.02857em',
  outline: 'none',
  padding: '12px 0',
}));

export default CommonButton;
