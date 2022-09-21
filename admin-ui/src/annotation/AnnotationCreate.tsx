import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SegmentTitle } from "../segment/SegmentTitle";

export const AnnotationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="annotation" source="annotation" />
        <TextInput label="cleansedAnnotation" source="cleansedAnnotation" />
        <TextInput label="emotionalType" source="emotionalType" />
        <BooleanInput label="isValid" source="isValid" />
        <ReferenceInput source="segment.id" reference="Segment" label="segment">
          <SelectInput optionText={SegmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
