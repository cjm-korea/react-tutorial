import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon,
    // faAngry
} from "@fortawesome/free-regular-svg-icons";
import React from 'react';

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;  // 계속 해줘야하나??
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  background-color: #000;
  width: 100%;
  border-radius: 10px;
  
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid white;
  margin-top: 5px;
  box-sizing: border-box;
  color: black;
  
  &::placeholder {
    font-size: 12px;
  }

  &:focus {
    border-color: rgb(38, 38, 38);
  }
`;

const Button = styled.input` // 왜 button이 아닐까?
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: #9c9ea0;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
  
  &:hover {
    opacity: 0.7;
  }
`;

function Login() {
    return(
        <MainContainer>
            <Wrapper>
                <Container>
                    <div  style={{'color' : 'white'}}>
                        <FontAwesomeIcon icon={faMoon} size="6x" />
                    </div>
                    <form>
                        <Input
                            name="username"
                            type="text"
                            placeholder="Username"
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <Button
                            type="submit"
                            value="Log in"
                        />
                    </form>
                </Container>
            </Wrapper>
        </MainContainer>
    )
}
export default Login;