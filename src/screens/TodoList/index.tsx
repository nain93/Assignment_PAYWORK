import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import TodoLists from './TodoLists';


const TodoList: React.FC = () => {
    return (
        <Container>
            <TodoLists />
        </Container>
    );
};

const Container = styled.View`
    padding:0 20px;
`

export default TodoList;
