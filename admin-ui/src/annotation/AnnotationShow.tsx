import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SEGMENT_TITLE_FIELD } from "../segment/SegmentTitle";

export const AnnotationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
