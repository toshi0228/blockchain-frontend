---
to: src/pages/<%= dir %>/<%= category %>/<%= name %>/<%= name %>.test.tsx
unless_exists: true
---
import {createMemoryHistory} from "history"
import {render, screen} from "@testing-library/react"
import {Router} from "react-router-dom"
import React from "react"
import <%= name %> from "./<%= name %>"

describe("Modules", () => {
  describe("<%= dir %>/<%= category %>/<%= name %>", () => {
    describe("Presenter", () => {
      test("Render", () => {
        const history = createMemoryHistory()
        render(
          <Router history={history}>
            <<%= name %> />
          </Router>
        )
      })
    });
  });
});
