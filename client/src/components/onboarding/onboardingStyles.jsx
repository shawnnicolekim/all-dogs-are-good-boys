import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ERROR MESSAGE - SIGNUP & LOGIN //
export const ErrorMessage = styled.div`
  background-color: crimson;
  color: mistyrose
`;

// FORM WRAPPER - SIGNUP & LOGIN //
export const FormWrapper = styled.div`
  margin: 20px 5px;
`;

// FORM INPUT - SIGNUP & LOGIN //
export const FormInput = styled.input`
  align: center;
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  padding: 10px;
  &: hover {
    border-color: blue;
  }
`;

// SUBMIT BUTTON - SIGNUP & LOGIN //
export const SubmitButton = styled.input`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 5px
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
