import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SEGMENT_TITLE_FIELD } from "../segment/SegmentTitle";

export const AnnotationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Annotations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="annotation" source="annotation" />
        <TextField label="cleansedAnnotation" source="cleansedAnnotation" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="emotionalType" source="emotionalType" />
        <TextField label="ID" source="id" />
        <BooleanField label="isValid" source="isValid" />
        <ReferenceField label="segment" source="segment.id" reference="Segment">
          <TextField source={SEGMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
