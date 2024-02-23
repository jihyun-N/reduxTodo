import React from "react";
import { StyledDiv, StyledTodoListHeader, StyledTodoListBox } from "./styles";
import Todo from "../Todo";
import { getTodos } from "../../../api/todos";
import { useQuery } from "react-query";

function TodoList({ isActive }) {
  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <StyledDiv>
      <StyledTodoListHeader>
        {isActive ? "해야 할 일 ⛱" : "완료한 일 ✅"}
      </StyledTodoListHeader>
      <StyledTodoListBox>
        {data
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return <Todo key={item.id} todo={item} isActive={isActive} />;
          })}
      </StyledTodoListBox>
    </StyledDiv>
  );
}

export default TodoList;
