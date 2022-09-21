import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TitleTitle } from "../title/TitleTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="projectName" source="projectName" />
        <ReferenceArrayInput
          source="titles"
          reference="Title"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TitleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
