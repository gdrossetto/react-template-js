import React from "react";

import {render} from "@testing-library/react";
import App from "./App";

describe("Test", () => {
    it("should run", () => {
        expect(true).toBe(true)
    })

    it("should render title correctly", () => {
        const {getByTestId} = render(<App text={"React"}/>)
        expect(getByTestId("app-title")).toBeInTheDocument()
    })
})
