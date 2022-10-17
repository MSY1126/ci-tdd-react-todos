// import React from "react";

// // 아이디, 텍스트, done, 삭제 

// const TodoItem = ({todo, onToggle, onRemove}) => {
//     const {id, text, done} = todo;
//     return (
//         <li>
//             <sapn style ={{
//                     TextDecoration : done ? 'line-through' : 'done'
//                 }}
//                 onClick ={()=> onToggle(id)}>{text} </sapn>
//             <button onClick={()=> onRemove(id)}>삭제</button>
//         </li>);
//         };
// export default TodoItem;


import React, { useCallback } from "react";


const TodoItem =({todo, onToggle, onRemove}) =>{
    const {id, text, done}= todo;
    const toggle = useCallback(()=> onToggle(id),[onToggle, id]);
    const remove = useCallback(()=> onRemove(id),[onRemove, id]);
    return(
        <div>
            <li>
                <span style={{
                    textDecoration:done ? 'line-through':'none'
                }}
                onClick={toggle}>{text}</span>
                <button onClick={remove}>삭제</button>
            </li>
        </div>
    )
}
export default TodoItem
