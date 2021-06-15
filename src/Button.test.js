import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Button from "./Button";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders change value when clicked', () => {
    const onChange = jest.fn();
    act(() => {
        render(<Button onChange={onChange} />, container);
    })
    const state = document.querySelector(".value");
    const btn = document.querySelector(".btn");
    expect(state.innerHTML).toBe("Current value : " + `${0}`);

    act(() => {
        btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));    
    });
    expect(state.innerHTML).toBe("Current value : " + `${1}`);
})