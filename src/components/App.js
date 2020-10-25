import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import ThemeToggle from './ThemeToggle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95%;
  width: 100%;
`;

const AppBar = styled.div`
  display: flex;
  align-items: center;
  height: 5%;
  width: 100%;
  padding: 0 0.5rem;
  border: 1px solid black;
`;

export default function App() {
  return (
    <Container>
      <AppBar>
        <ThemeToggle />
      </AppBar>
      <TodoList /> 
    </Container> 
  );  
}
