export interface Ilist {
    id: string
    content: string
    isCheck: boolean
    createdAt: string
}

export interface IlistState {
    list: Ilist[]
    setList: React.Dispatch<React.SetStateAction<Ilist[]>>
}

