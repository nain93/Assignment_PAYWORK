import firestore from '@react-native-firebase/firestore';
import { Ilist } from '../../shared-interfaces';



export const getAllList = async () => {
  const res = await firestore()
    .collection('todo')
    .doc('dcYhkrklqNDQrrQeVfrS')
    .get();


  return res
};

export const createList = async (content: string) => {
  // const { data }: any = await firestore()
  // .collection('todo').doc('dcYhkrklqNDQrrQeVfrS').set({
  //   id: String(Date.now()),
  //   content,
  //   isCheck: false,
  //   createdAt: today.toISOString(),
  // })
  if (!content) {
    return { msg: 'error' };
  }
  const res = await getAllList();
  const todos = res.data()
  const today = new Date();
  todos?.todolist.unshift({
    id: String(Date.now()),
    content,
    isCheck: false,
    createdAt: today.toISOString(),
  });
  firestore().collection('todo').doc('dcYhkrklqNDQrrQeVfrS').update(todos);
  return { msg: "create successfully" }
};

export const postTodoEdit = async (id: string, content: string) => {
  if (!id || !content) {
    return { msg: 'error' }
  }
  const res = await getAllList();
  const todos = res.data();

  const editList = todos?.todolist.map((item: Ilist) => {
    if (item.id === id) {
      item.content = content
    }
    return item
  })
  firestore().collection('todo').doc('dcYhkrklqNDQrrQeVfrS').update(editList);
  return {
    msg: "create successfully",
    content: content
  }
}

export const postTodoCheck = async (id: string, isCheck: boolean) => {
  if (!id || !isCheck) {
    return { msg: "error" }
  }
  const res = await getAllList();
  const todos = res.data();
  const editList = todos?.todolist.map((item: Ilist) => {
    if (item.id === id) {
      item.isCheck = isCheck
    }
    return item
  })
  firestore().collection('todo').doc('dcYhkrklqNDQrrQeVfrS').update(editList);
  return { msg: "create successfully" }
}

export const postTodoDelete = async (id: string) => {
  if (!id) {
    return { msg: "error" }
  }
  const res = await getAllList();
  const todos = res.data();
  const deleteList = todos?.todolist.filter((item: Ilist) => (
    item.id !== id
  ))
  firestore().collection('todo').doc('dcYhkrklqNDQrrQeVfrS').update(deleteList);
  return { msg: "delete successfully" }
}

