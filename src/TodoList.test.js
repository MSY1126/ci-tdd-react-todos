import React from "react";
import { render, fireEvent, getAllByText } from "@testing-library/react";
import Todolist from "./TodoList";

describe('<TodoList />',()=>{
    const sampleTodos =[
        {
            id: 1,
            text: 'TDD 배우기',
            done: false,
        },
        {
            id: 2,
            text: 'react-testing-library',
            done: true,
        }
    ];
    it('has two todos',() =>{
        const {getByText}=render(<Todolist todos={sampleTodos} />);
        getByText(sampleTodos[0].text);
        getByText(sampleTodos[1].text);
    });

    it('calls on Toggle and onRemove', () => {
        const onToggle = jest.fn();
        const onRemove = jest.fn();
        const {getByText, getAllByText} = render (<Todolist todos={sampleTodos}
            onToggle = {onToggle} onRemove = {onRemove} />);
        fireEvent.click(getByText(sampleTodos[0].text));
        expect(onToggle).toBeCalledWith(sampleTodos[0].id);
        fireEvent.click(getAllByText('삭제')[0]);
        expect(onRemove).toBeCalledWith(sampleTodos[0].id);    
    });
})