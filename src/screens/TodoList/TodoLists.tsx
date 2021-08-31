import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Ilist } from '../../../shared-interfaces';
import { getAllList } from '../../api';

interface Icontent {
    content: string
}

const Item = ({ content }: Icontent) => (
    <ListItem>
        <Text>{content}</Text>
    </ListItem>
);

const TodoLists: React.FC = () => {
    const [todos, setTodos] = useState([])
    const fetchList = async () => {
        try {
            const res = await getAllList()
            setTodos(res.data()?.todoList)
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    const renderItem = ({ item }: { item: Ilist }) => (
        <Item content={item.content} />
    );
    return (
        <FlatList data={todos}
            renderItem={renderItem}
            keyExtractor={item => item.id} />
    );
};

const ListItem = styled.View`
    border: 1px solid rgba(0,0,0,0.6);
    margin:10px 0;
    border-radius: 5px;
    padding: 30px 20px;
`

export default TodoLists;
