import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DeveloperAgentList } from "./developerAgent/DeveloperAgentList";
import { DeveloperAgentCreate } from "./developerAgent/DeveloperAgentCreate";
import { DeveloperAgentEdit } from "./developerAgent/DeveloperAgentEdit";
import { DeveloperAgentShow } from "./developerAgent/DeveloperAgentShow";
import { MetaAgentList } from "./metaAgent/MetaAgentList";
import { MetaAgentCreate } from "./metaAgent/MetaAgentCreate";
import { MetaAgentEdit } from "./metaAgent/MetaAgentEdit";
import { MetaAgentShow } from "./metaAgent/MetaAgentShow";
import { TesterAgentList } from "./testerAgent/TesterAgentList";
import { TesterAgentCreate } from "./testerAgent/TesterAgentCreate";
import { TesterAgentEdit } from "./testerAgent/TesterAgentEdit";
import { TesterAgentShow } from "./testerAgent/TesterAgentShow";
import { ScrumMasterAgentList } from "./scrumMasterAgent/ScrumMasterAgentList";
import { ScrumMasterAgentCreate } from "./scrumMasterAgent/ScrumMasterAgentCreate";
import { ScrumMasterAgentEdit } from "./scrumMasterAgent/ScrumMasterAgentEdit";
import { ScrumMasterAgentShow } from "./scrumMasterAgent/ScrumMasterAgentShow";
import { ProductOwnerAgentList } from "./productOwnerAgent/ProductOwnerAgentList";
import { ProductOwnerAgentCreate } from "./productOwnerAgent/ProductOwnerAgentCreate";
import { ProductOwnerAgentEdit } from "./productOwnerAgent/ProductOwnerAgentEdit";
import { ProductOwnerAgentShow } from "./productOwnerAgent/ProductOwnerAgentShow";
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
        title={"ScrumTeamService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DeveloperAgent"
          list={DeveloperAgentList}
          edit={DeveloperAgentEdit}
          create={DeveloperAgentCreate}
          show={DeveloperAgentShow}
        />
        <Resource
          name="MetaAgent"
          list={MetaAgentList}
          edit={MetaAgentEdit}
          create={MetaAgentCreate}
          show={MetaAgentShow}
        />
        <Resource
          name="TesterAgent"
          list={TesterAgentList}
          edit={TesterAgentEdit}
          create={TesterAgentCreate}
          show={TesterAgentShow}
        />
        <Resource
          name="ScrumMasterAgent"
          list={ScrumMasterAgentList}
          edit={ScrumMasterAgentEdit}
          create={ScrumMasterAgentCreate}
          show={ScrumMasterAgentShow}
        />
        <Resource
          name="ProductOwnerAgent"
          list={ProductOwnerAgentList}
          edit={ProductOwnerAgentEdit}
          create={ProductOwnerAgentCreate}
          show={ProductOwnerAgentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
