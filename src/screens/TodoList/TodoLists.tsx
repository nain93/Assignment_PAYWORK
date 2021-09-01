import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ilist, Imodal } from '../../../shared-interfaces';
import { getAllList } from '../../api';

interface Icontent {
    content: string
}

const Item = ({ content }: Icontent) => (
    <ListItem>
        <Text>{content}</Text>
    </ListItem>
);

const TodoLists = ({ modalVisible, setModalVisible }: Imodal) => {
    const [todos, setTodos] = useState<Ilist[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const fetchList = async () => {
        try {
            setLoading(true)
            const res = await getAllList()

            if (res === undefined) {
                return
            }
            setTodos(res.data()?.todolist)
            await AsyncStorage.setItem('todos', JSON.stringify(res.data()?.todolist));

        }
        catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchList()
    }, [modalVisible])

    useEffect(() => {
        const getStorage = async () => {
            let data = await AsyncStorage.getItem('todos');
            setTodos(JSON.parse(data))
        }
        getStorage()
    }, [modalVisible]);

    const renderItem = ({ item }: { item: Ilist }) => (
        <Item content={item.content} />
    );

    return (
        <FlatList data={todos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onRefresh={() => fetchList()}
            refreshing={loading}
        />


    );
};

const ListItem = styled.View`
    border: 1px solid rgba(0,0,0,0.6);
    margin:10px 0;
    border-radius: 5px;
    padding: 30px 20px;
`

export default TodoLists;
