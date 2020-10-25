import React from 'react';
import styled from 'styled-components';
import { observer } from "mobx-react-lite"
import useStore from '../hooks/useStore';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 5%;
`;

function ThemeToggle() {
    const { themeStore } = useStore();

    const handleClick = () => {
        themeStore.toggleTheme();
    }

    return (
        <Button onClick={handleClick}>toggle</Button>
    );
}

export default observer(ThemeToggle);