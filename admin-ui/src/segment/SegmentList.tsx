import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ANNOTATION_TITLE_FIELD } from "../annotation/AnnotationTitle";
import { TITLE_TITLE_FIELD } from "../title/TitleTitle";

export const SegmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Segments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="annotation"
          source="annotation.id"
          reference="Annotation"
        >
          <TextField source={ANNOTATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="endSample" source="endSample" />
        <TextField label="fileAbsolutePath" source="fileAbsolutePath" />
        <TextField label="filename" source="filename" />
        <TextField label="ID" source="id" />
        <TextField label="startSample" source="startSample" />
        <ReferenceField label="title" source="title.id" reference="Title">
          <TextField source={TITLE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
