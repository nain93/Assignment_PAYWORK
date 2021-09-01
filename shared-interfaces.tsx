export interface Ilist {
    id: string
    content: string
    isCheck: boolean
    createdAt: string
}

export interface Imodal {
    modalVisible: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

