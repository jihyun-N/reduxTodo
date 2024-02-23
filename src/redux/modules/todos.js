import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/**
 * 메서드 개요 : todo 객체를 입력받아, 기존 todolist에 더함
 * 2022.12.16 : 최초작성
 *
 * @param {todo 객체} payload
 * @returns
 */
// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

/**
 * 메서드 개요 : todo의 id를 입력받아, 일치하는 todolist를 삭제
 * 2022.12.16 : 최초작성
 *
//  * @param {todo의 id} payload
//  * @returns
//  */

const initialState = [
  {
    id: uuidv4(),
    title: "리액트 공부하기",
    contents: "빨리빨리 암기하기",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "스프링 공부하기",
    contents: "인강 열심히 들어보기!!",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "데이트",
    contents: "홍대입구역에서 3시까지",
    isDone: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // 불변성을 유지시켜야 한다.
      // return [...state, action.payload];
      // redux toolkit 안에 immer 라는 기능이 내장되어 있기 때문에
      // state.push(action.payload);
      // 를 사용할 수 있다.
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    switchTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});
//  [slice] 만 있으면 이 3가지를 한꺼번에 할 수 있다.
// 1. export action creator
// 2. export reducer
// 3. action value
export const { addTodo, removeTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
