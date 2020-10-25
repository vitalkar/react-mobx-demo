import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite"
import useStore from '../hooks/useStore';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 50%;
`;

function Stats() {
    const { todoStore } = useStore();
    return (
        <Container>
            total : {todoStore.total} | completed : {todoStore.completedTodos}
        </Container>
    );
}

export default observer(Stats);