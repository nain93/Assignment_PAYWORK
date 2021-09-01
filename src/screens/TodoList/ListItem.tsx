import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { postTodoDelete } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ilist } from '../../../shared-interfaces';

interface Icontent {
  content: string;
  id: string;
  setList: React.Dispatch<React.SetStateAction<Ilist[]>>;
}

const ListItem = ({ content, id, setList }: Icontent) => {
  const handleDelete = () => {
    setList((prevState: any) =>
      prevState.filter((item: Ilist) => item.id !== id),
    );
  };

  const handleEditContent = e => {
    setList((prevState: Ilist[]) =>
      prevState.map((todo: Ilist) => {
        if (todo.id === id) {
          return {
            ...todo,
            content: e.target.value,
          };
        }
        return todo;
      }),
    );
  };
  const textRef = useRef();
  const handleFocus = (nextOne: any) => {
    nextOne?.current?.focus();
  };

  const handleChange = (text: string) => {
    setList((prevState: Ilist[]) =>
      prevState.map((todo: Ilist) => {
        if (todo.id === id) {
          return {
            ...todo,
            content: text,
          };
        }
        return todo;
      }),
    );
  };
  return (
    <ListItemContainer>
      <ContentWrap>
        <TextInput ref={textRef} onChangeText={text => handleChange(text)}>
          {content}
        </TextInput>
        <EditIcon onPress={() => handleFocus(textRef)}>
          <Icon name="edit" size={20} />
        </EditIcon>
      </ContentWrap>

      <TouchableOpacity onPress={handleDelete}>
        <Icon name="delete" size={25} />
      </TouchableOpacity>
    </ListItemContainer>
  );
};

const ListItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin: 10px 0;
  border-radius: 5px;
  padding: 30px 20px;
`;

const ContentWrap = styled.View`
  flex-direction: row;
  align-items: center;
`;

const EditIcon = styled.TouchableOpacity`
  margin-left: 20px;
`;

export default ListItem;
