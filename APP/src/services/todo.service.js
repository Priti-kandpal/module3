import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

const todosRef = collection(db, "todos");
export const fetchTodos = async (userId) => {
  const snapshot = await getDocs(todosRef);
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(todo => todo.userId === userId); // only user-specific todos
};


export const createTodo = async (todo) => {
  await addDoc(todosRef, todo);
};


export const updateTodo = async (id, updatedFields) => {
  const docRef = doc(db, "todos", id);
  await updateDoc(docRef, updatedFields);
};

export const deleteTodo = async (id) => {
  const docRef = doc(db, "todos", id);
  await deleteDoc(docRef);
};
