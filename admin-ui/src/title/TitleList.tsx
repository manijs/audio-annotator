import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const TitleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Titles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="project" source="project.id" reference="Project">
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
    </List>
  );
};
