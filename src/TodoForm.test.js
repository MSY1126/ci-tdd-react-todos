// import React from "react";
// import {render} from '@testing-library/react';
// import TodoForm from "./TodoForm";

// describe('<TodoForm/>', () => {
//     it('ha input and botton', () => {
//         const {getByText, getByplaceholderText } = render(<TodoForm/>);
//         getByplaceholderText('할 일을 입력하세요'); // input 확인
//         getByText('등록'); //button 확인
//     });
// });

import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe('<TodoForm />',()=>{
    it('ha input and button',()=>{
        const { getByText, getByPlaceholderText}=render(<TodoForm />);
        getByPlaceholderText('할 일을 입력하세요.'); // input이 있는지 확인
        getByText('등록'); // button이 있는지 확인
    });
    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn();
        const { getByText, getByPlaceholderText } = render(<TodoForm onInsert={onInsert} />);
        const input = getByPlaceholderText('할 일을 입력하세요');
        const button = getByText('등록');
        // change 이벤트 발생시키기
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기',
            },
        });
        // 버튼 클릭시키기
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기'); // onInsert가 'TDD 배우기' 파라미터가 호출되었는지 확인
        expect(input).toHaveAttribute('value', ''); // input이 비워졌는지 확인
    });
});