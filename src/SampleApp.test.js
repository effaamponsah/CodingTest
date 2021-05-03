import React from "react";
// import { render } from 'react-dom';
import { shallow, configure } from "enzyme";
import SampleApp from "./SampleApp";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("should render changes", () => {
  const app = shallow(<SampleApp />);
  expect(app.text()).toEqual("redRedGreen");
  //   app.find("input").first().simulate("change");
  //   expect(app.text()).toEqual("red");
});
