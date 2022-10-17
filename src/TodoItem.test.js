import React from "react";
import {render, fireEvent} from "@testing-library/react";
import TodoItem from "./Todoitem";


describe('<TodoItem />', () => {
    const sampleTodo = {
        id : 1,
        text : 'TDD배우기',
        done : false,
    };
    const setup = (props = {}) => {
        const utils = render(<TodoItem todo = {sampleTodo} {...props} />);
        const { getByText } = utils;
        const todo = sampleTodo;
        const span = getByText(Todo.text);
        const button = getByText(삭제);
        return{
            ...utils,
            sapn,
            button,
        };
    };
    
    it('has span and button', ()=>{
        const {span, button} = setup();
        expact(span). toBeTruthy();
        expact(button). toBeTruthy();
    });
});