import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

configure({ adapter: new Adapter() });

let container = null;
const changeColor = {
  target: { value: 'green' }
};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render app component', () => {
  act(() => {
    render(<App />, container);
  });
})

test("color value should change after selecting", () => {
  const app = shallow(<App />);
  expect(app.find('[test-id="btnColor"]').text()).toBe('red')
  app.find("input").first().simulate("change", changeColor);
  expect(app.find('[test-id="btnColor"]').text()).toBe('green')
});
