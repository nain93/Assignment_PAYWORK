import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import styled from 'styled-components/native';
import AddIcon from "react-native-vector-icons/MaterialIcons"
import { createList } from '../api';
import { Ilist, IlistState } from '../../shared-interfaces';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';




const AddTodoBtn = ({ list, setList }: IlistState) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [value, setValue] = useState<string>("")
    const [error, setError] = useState<string>("")
    const handleAddTodo = () => {
        const today = new Date()
        if (value.length === 0) {
            return
        }
        setList((prevState: Ilist[]) =>
            [
                {
                    id: String(Date.now()),
                    isCheck: false,
                    createdAt: today.toISOString(),
                    content: value
                },
            ].concat(prevState),
        );
        setValue("")

    }
    useEffect(() => {
        AsyncStorage.setItem('todos', JSON.stringify(list))
    }, [list])



    const handleChange = (text: string) => {
        setValue(text)
    }
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <CenteredView >
                    <ModalView >
                        <ModalText>할일을 적으세요</ModalText>
                        <TextInput
                            placeholder="ex)타입스크립트 공부하기..."
                            onChangeText={handleChange}
                            onSubmitEditing={() => {
                                handleAddTodo()
                                setModalVisible(!modalVisible)
                            }}
                        />
                        <AddBtn
                            onPress={() => {
                                handleAddTodo()
                                setModalVisible(!modalVisible)
                            }}
                        >
                            <Text>Add Todo</Text>
                        </AddBtn>
                    </ModalView>
                </CenteredView>
            </Modal>
            <AddButton onPress={() => setModalVisible(true)}>
                <AddIcon name="add-circle-outline" size={40} />
            </AddButton>
        </View>

    )
}

const AddButton = styled.TouchableOpacity`
position: absolute;
right: -15px;
bottom:30px;

`



const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: white;
`
const AddBtn = styled.TouchableOpacity``

const ModalView = styled.View``

const ModalText = styled.Text``


export default AddTodoBtn
