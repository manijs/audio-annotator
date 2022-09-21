import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TitleTitle } from "../title/TitleTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
