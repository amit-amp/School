import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TestList } from "./test/TestList";
import { TestCreate } from "./test/TestCreate";
import { TestEdit } from "./test/TestEdit";
import { TestShow } from "./test/TestShow";
import { GradeList } from "./grade/GradeList";
import { GradeCreate } from "./grade/GradeCreate";
import { GradeEdit } from "./grade/GradeEdit";
import { GradeShow } from "./grade/GradeShow";
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
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Test"
          list={TestList}
          edit={TestEdit}
          create={TestCreate}
          show={TestShow}
        />
        <Resource
          name="Grade"
          list={GradeList}
          edit={GradeEdit}
          create={GradeCreate}
          show={GradeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
