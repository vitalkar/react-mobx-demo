import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite"
import useStore from '../hooks/useStore';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5%;
    width: 50%;
`;

const Input = styled.input`
    height: 100%;
    width: 50%;
`;

const AddButton = styled.button`
    height: 100%;
    width: 10%;
`;

function AddTodo() {
    const { todoStore } = useStore();

    const [value, setValue] = useState('');

    const handleClick = () => {
        if (value) {
            todoStore.add(value);
            setValue('');
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <Container>
            <Input onChange={handleChange} value={value} />
            <AddButton onClick={handleClick}>add</AddButton>
        </Container>
    );
}

export default observer(AddTodo);