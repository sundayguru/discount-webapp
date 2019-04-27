import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.primary ? "#60dafb" : "#e2e1e1"};
  color: ${props => props.primary ? "white" : "#484848"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.primary ? "#60dafb" : "#e2e1e1"};
  border-radius: 3px;
  cursor: pointer;
  &:hover {
      background: ${props => props.primary ? "#46a1b9" : "#b9b7b7"}
  }
`;

export default Button;