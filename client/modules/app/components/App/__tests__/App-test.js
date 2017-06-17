import React from "react";
import { shallow } from "enzyme";

import { App } from "..";
import theme from "../theme.scss";

describe("App", () => {
  test("renders a welcome message", () => {
    const wrapper = shallow(<App theme={theme} />);

    expect(wrapper.find("h4").text()).toEqual("Welcome!");
  });
});
