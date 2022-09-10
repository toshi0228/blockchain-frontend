---
to: src/components/molecules/<%= name %>/<%= name %>.test.tsx
unless_exists: true
---
import React from "react"
import {Router} from "react-router-dom"
import {createMemoryHistory} from "history"
import {render, screen} from "@testing-library/react"
import <%= name %> from "./<%= name %>"

describe("Modules", () => {
  describe("<%= h.changeCase.title(name) %>", () => {
    describe("Component", () => {
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
