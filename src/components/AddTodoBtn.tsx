import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import styled from 'styled-components/native';
import AddIcon from "react-native-vector-icons/MaterialIcons"
import { createList } from '../api';
import { Imodal } from '../../shared-interfaces';




const AddTodoBtn = ({ modalVisible, setModalVisible }: Imodal) => {
    const [value, setValue] = useState<string>("")
    const handleAddTodo = async () => {
        if (value === undefined) {
            return
        }
        try {
            const res = await createList(value)
            console.log(res, "res");
        }
        catch {

        }
    }
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
                            <Text >Add Todo</Text>
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
right: 0px;
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
