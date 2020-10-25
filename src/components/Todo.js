import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite"
import useStore from '../hooks/useStore';

const Item = styled.li`
    display: flex;
    align-items: center;
    height: 5%;
    width: 100%;
    margin: 0.5rem 0;
`;

const Checkbox = styled.input`
    margin: 0 1rem; 
`;

const Content = styled.p`
    height: 100%;
    width: 80%;
    text-decoration: ${props => props.completed ? 'line-through' : null};
`;

const Button = styled.button`
    width: auto;
`;

function Todo({ todo }) {
    const { todoStore } = useStore();

    const handleRemove = () => {
        todoStore.remove(todo.id);
    }

    const handleCheck = (e) => {
        todo.completed = e.target.checked;
    }

    return (
        <Item>
            <Checkbox type='checkbox' onChange={handleCheck} checked={todo.completed} />
            <Content completed={todo.completed}>{todo.content}</Content>
            <Button onClick={handleRemove}>remove</Button>
        </Item>
    );
}

export default observer(Todo);