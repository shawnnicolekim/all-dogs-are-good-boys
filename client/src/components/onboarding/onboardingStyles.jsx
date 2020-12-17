import { Link } from 'react-router-dom';
import styled from 'styled-components';

// FRONT PAGE WRAPPER //
export const FrontPageWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right -50%;
  transform: translate(-50%, -50%)
`;

// LINKS - SIGNUP & LOGIN//
export const SignupLink = styled(Link)`
  background-color: papayawhip;
  border: 2px solid grey;
  border-radius: 4px;
  color: palevioletred;
  width: fit-content;
  font-weight: bold;
  margin: 20px;
  padding: 10px;
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

// MESSAGE - SIGNUP //
export const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  padding: 5px;
  width: fit-content;
`;

// ERROR MESSAGE - SIGNUP & LOGIN //
export const ErrorMessage = styled(Message)`
  background-color: crimson;
  color: mistyrose;
`;

// FORM WRAPPER - SIGNUP & LOGIN //
export const FormWrapper = styled.div`
  border: 2px solid black;
  margin: 20px auto;
  padding: 5px
`;

// FORM INPUT - SIGNUP & LOGIN //
export const FormInput = styled.input`
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


