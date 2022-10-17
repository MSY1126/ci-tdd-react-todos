import React from "react";

// 아이디, 텍스트, done, 삭제 

const TodoItem = ({Todo}) => {
    const {id, text, done} = todo;
    return (
        <li>
            <sapn> {text} </sapn>
            <button>삭제</button>
        </li>);
};
export default TodoItem;

