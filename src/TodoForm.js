import React, { useCallback, useState } from "react";

const TodoForm =()=>{
    const [value, setValue] =useState("");
    const onChange=useCallback(e=>{
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault(); //새로고침 방지..?

    }, [onInsert, value]);
    
    return(
        <div>
            <form>
                <input value={value} onChange={onChange} placeholder="할 일을 입력하세요." />
                <button type="submit">등록</button>
            </form>
        </div>
            );
    
}

export default TodoForm;