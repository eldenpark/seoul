const Button = styled.button<any>`
  &:hover {
    color: ${(props) => (props.disabled ? 'inherit' : '#d6d6d6')};
  }
  border: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-block;
  font-weight: 500;
  letter-spacing: 0.02857em;
  outline: none;
  padding: 12px 0;
  transition: all 0.3s;
`;

export default Button;
