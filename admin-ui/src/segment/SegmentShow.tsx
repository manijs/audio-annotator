import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ANNOTATION_TITLE_FIELD } from "../annotation/AnnotationTitle";
import { TITLE_TITLE_FIELD } from "../title/TitleTitle";

export const SegmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
