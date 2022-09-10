---
to: src/contexts/contexts.<%= h.changeCase.lcFirst(name)%>.tsx
unless_exists: true
---

import React, { createContext, useState } from 'react';

interface I<%= name %>Context {
  <%= h.changeCase.lcFirst(name)%>: {};
  set<%= name %>:React.Dispatch<React.SetStateAction<any>>;

}

// グローバルで持つデフォルトデータを定義する。
export const <%= name %>Context = createContext<I<%= name %>Context>({
  <%= h.changeCase.lcFirst(name)%>: {},
  set<%= name %>: () => ""
});


// グローバルで持つデータを作成する。
export const <%= name %>Provider: React.FC = (props) => {
  const { children } = props;

  const [<%= h.changeCase.lcFirst(name)%>, set<%= name %>] = useState({});


  return (
    <<%= name %>Context.Provider value={{ <%= h.changeCase.lcFirst(name)%>, set<%= name %> }}>{children}</<%= name %>Context.Provider>
  );
};

