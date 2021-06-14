import React from "react";
import ReactDOM from "react-dom";
import { render, unmountComponentAtNode } from "react-dom";
import Book from "./Book";

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

it('renders without crashing', () => {
    ReactDOM.render(<Book />, container);
    ReactDOM.unmountComponentAtNode(container);
});

it('renders list of books after fetching', async () => {
    const fakeData = [1, 2, 3, 4, 5].map(id => ({
        id,
        name: "book" + `${id}`
    }))
    const fakeResult = { data: fakeData }

    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(fakeResult)
        })
    })
})