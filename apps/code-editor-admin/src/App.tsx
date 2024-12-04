import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CodeSnippetList } from "./codeSnippet/CodeSnippetList";
import { CodeSnippetCreate } from "./codeSnippet/CodeSnippetCreate";
import { CodeSnippetEdit } from "./codeSnippet/CodeSnippetEdit";
import { CodeSnippetShow } from "./codeSnippet/CodeSnippetShow";
import { CompletionList } from "./completion/CompletionList";
import { CompletionCreate } from "./completion/CompletionCreate";
import { CompletionEdit } from "./completion/CompletionEdit";
import { CompletionShow } from "./completion/CompletionShow";
import { SuggestionList } from "./suggestion/SuggestionList";
import { SuggestionCreate } from "./suggestion/SuggestionCreate";
import { SuggestionEdit } from "./suggestion/SuggestionEdit";
import { SuggestionShow } from "./suggestion/SuggestionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CodeEditor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CodeSnippet"
          list={CodeSnippetList}
          edit={CodeSnippetEdit}
          create={CodeSnippetCreate}
          show={CodeSnippetShow}
        />
        <Resource
          name="Completion"
          list={CompletionList}
          edit={CompletionEdit}
          create={CompletionCreate}
          show={CompletionShow}
        />
        <Resource
          name="Suggestion"
          list={SuggestionList}
          edit={SuggestionEdit}
          create={SuggestionCreate}
          show={SuggestionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
