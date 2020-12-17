import styled from 'styled-components';
import { Link } from 'react-router-dom';

// TITLE BUTTON //
export const TitleButton = styled(Link)`
  color: plum;
  font-family: monaco, "courier new", monospace;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  width: fit-content
`;
