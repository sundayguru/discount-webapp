import styled from 'styled-components'

const Alert = styled.p`
  color: ${props => props.info ? "#07310b" : "#ff0000"};
  background: ${props => props.info ? "#c0ecf9" : "#f9c0c0"};
  font-size: 0.65em;
  margin: 0.25em;
  padding: 1em;
  text-align: center;
  min-width: 300px;
  border-radius: 3px;
`;

export default Alert;