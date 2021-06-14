import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Person from './Person';

let container = null ;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders with or without a name', () => {
    act(() => {
        render(<Person />, container);
    });
    expect(container.textContent).toBe('no person');

    act(() => {
        render(<Person name="Thai"/>, container);
    });
        expect(container.textContent).toBe('Thai');

    act(() => {
        render(<Person name="name of some one"/>, container);
    });
        expect(container.textContent).toBe('name of some one');
});