export interface Ilist {
    id: string
    content: string
    isCheck: boolean
    createdAt: string
}

export interface ISimplePost {
    id: string | number;
    title: string;
    video_id: string;
    author: string;
}

export type IPosts = ISimplePost[]