import React, { useState } from 'react';
import styled from 'styled-components/native';
import TodoLists from './TodoLists';
import AddTodoBtn from '../../components/AddTodoBtn';
import { Ilist } from '../../../shared-interfaces';



const TodoList: React.FC = () => {
    const [list, setList] = useState<Ilist[]>([
        {
            id: "1",
            isCheck: false,
            createdAt: "2021-05-26T11:51:05.097Z",
            content: "타입스크립트 공부하기"
        },
        {
            id: "2",
            isCheck: false,
            createdAt: "2021-05-26T11:51:05.097Z",
            content: "이력서 쓰기"
        },
    ])

    return (
        <Container>
            <TodoLists list={list} setList={setList} />
            <AddTodoBtn list={list} setList={setList} />
        </Container>
    );
};

const Container = styled.View`
    padding:0 20px;
    flex: 1;
`


export default TodoList;
