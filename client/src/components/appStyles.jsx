import styled from 'styled-components';
import { Link } from 'react-router-dom';

// TITLE BUTTON //
export const TitleButton = styled(Link)`
  color: plum;
  display: flex;
  flex-direction: column;
  font-family: monaco, "courier new", monospace;
  font-size: 40px;
  font-weight: bold;
  margin: auto;
  padding: 20px;
  text-align: center;
  text-decoration: none;
`;