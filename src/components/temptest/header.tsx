import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"
describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header title="Default Starter" description="test"/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})