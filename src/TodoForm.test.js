import React from "react";
import {render} from '@testing-library/react';
import TodoForm from "./TodoForm";

describe('<TodoForm/>', () => {
    it('ha input and botton', () => {
        const {getByText, getByplaceholderText } = render(<TodoForm/>);
        getByplaceholderText('할 일을 입력하세요'); // input 확인
        getByText('등록'); //button 확인
    });
});