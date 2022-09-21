import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROJECT_TITLE_FIELD } from "./ProjectTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="projectName" source="projectName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Title" target="ProjectId" label="Titles">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="refTranscription" source="refTranscription" />
            <TextField label="sampleRate" source="sampleRate" />
            <TextField label="sourceDuration" source="sourceDuration" />
            <TextField label="sourceFilename" source="sourceFilename" />
            <TextField label="sourceFilePath" source="sourceFilePath" />
            <TextField label="sourceFileSize" source="sourceFileSize" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
