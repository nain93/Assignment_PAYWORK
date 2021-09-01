import React, { useState } from 'react';
import styled from 'styled-components/native';
import TodoLists from './TodoLists';
import AddTodoBtn from '../../components/AddTodoBtn';



const TodoList: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <Container>
            <TodoLists modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <AddTodoBtn modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Container>
    );
};

const Container = styled.View`
    padding:0 20px;
`


export default TodoList;
