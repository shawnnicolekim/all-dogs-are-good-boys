import { Link } from 'react-router-dom';
import styled from 'styled-components';

// FORM WRAPPER - SIGNUP & LOGIN //
export const FormWrapper = styled.div`
  border: 2px solid black
`;

// ERROR MESSAGE - SIGNUP & LOGIN //
export const ErrorMessage = styled.div`
  background-color: crimson;
  color: mistyrose
`;

// SUBMIT BUTTON - SIGNUP & LOGIN //
export const SubmitButton = styled.input`
  border: 2px solid black
`;

// LINKS - SIGNUP & LOGIN//
export const SignupLink = styled(Link)`
  background-color: papayawhip;
  border: 2px solid grey;
  border-radius: 4px;
  color: palevioletred;
  font-weight: bold;
  margin: 5px;
  padding: 5px;
  text-decoration: none;
  &: hover {
    border-color: palevioletred;
  }
`;

export const LoginLink = styled(SignupLink)`
  background-color: peachpuff;
  color: salmon;
  &: hover {
    border-color: salmon;
  }
`;
