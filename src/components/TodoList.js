import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite"
import useStore from '../hooks/useStore';
import Todo from './Todo';
import AddTodo from './AddTodo';
import Stats from './Stats';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 2rem;
    background-color: ${props => props.background};
    color: ${props => props.color};
`;

const List = styled.ul`
    height: 50%;
    width: 50%;
    list-style-type: none;
`;

const Title = styled.div`
    height: 5%;
    width: 75%;
    text-align: center;
`;

function TodoList() {
    const { todoStore, themeStore } = useStore();
    return (
        <Container background={themeStore.theme.primary} color={themeStore.theme.secondary}> 
            <Title>Todo List</Title>
            <Stats />
            <AddTodo />
            <List>
                {todoStore.todos.map((todo, index) => <Todo key={index} todo={todo} />)}
            </List>
        </Container>
    );
}

export default observer(TodoList);