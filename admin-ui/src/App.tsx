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
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { TitleList } from "./title/TitleList";
import { TitleCreate } from "./title/TitleCreate";
import { TitleEdit } from "./title/TitleEdit";
import { TitleShow } from "./title/TitleShow";
import { SegmentList } from "./segment/SegmentList";
import { SegmentCreate } from "./segment/SegmentCreate";
import { SegmentEdit } from "./segment/SegmentEdit";
import { SegmentShow } from "./segment/SegmentShow";
import { AnnotationList } from "./annotation/AnnotationList";
import { AnnotationCreate } from "./annotation/AnnotationCreate";
import { AnnotationEdit } from "./annotation/AnnotationEdit";
import { AnnotationShow } from "./annotation/AnnotationShow";
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
        title={"My service"}
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
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Title"
          list={TitleList}
          edit={TitleEdit}
          create={TitleCreate}
          show={TitleShow}
        />
        <Resource
          name="Segment"
          list={SegmentList}
          edit={SegmentEdit}
          create={SegmentCreate}
          show={SegmentShow}
        />
        <Resource
          name="Annotation"
          list={AnnotationList}
          edit={AnnotationEdit}
          create={AnnotationCreate}
          show={AnnotationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
