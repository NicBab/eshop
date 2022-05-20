import React from "react";
import { useNavigationType } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  max-width: 400px;
  border-radius: 5px;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 75%;
  margin: 10px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: teal;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>Sign In</Title>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <Link>Forgot Password?</Link>
          <Link>Create New Account</Link>
          <Link onClick={() => navigate("/")}>Home</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
