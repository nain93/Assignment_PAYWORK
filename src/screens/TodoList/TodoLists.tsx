import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Ilist, IlistState } from '../../../shared-interfaces';
import ListItem from './ListItem';

const TodoLists = ({ list, setList }: IlistState) => {
  useEffect(() => {
    const getStorage = async () => {
      let data = await AsyncStorage.getItem('todos');
      setList(JSON.parse(data!));
    };
    getStorage();
  }, []);

  const renderItem = ({ item }: { item: Ilist }) => (
    <ListItem content={item.content} id={item.id} setList={setList} />
  );

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default TodoLists;
