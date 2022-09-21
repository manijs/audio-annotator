import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SegmentTitle } from "../segment/SegmentTitle";

export const AnnotationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="annotation" source="annotation" />
        <TextInput label="cleansedAnnotation" source="cleansedAnnotation" />
        <TextInput label="emotionalType" source="emotionalType" />
        <BooleanInput label="isValid" source="isValid" />
        <ReferenceInput source="segment.id" reference="Segment" label="segment">
          <SelectInput optionText={SegmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
