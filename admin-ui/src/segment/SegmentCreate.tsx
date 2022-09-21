import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AnnotationTitle } from "../annotation/AnnotationTitle";
import { TitleTitle } from "../title/TitleTitle";

export const SegmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="annotation.id"
          reference="Annotation"
          label="annotation"
        >
          <SelectInput optionText={AnnotationTitle} />
        </ReferenceInput>
        <NumberInput label="duration" source="duration" />
        <NumberInput step={1} label="endSample" source="endSample" />
        <TextInput label="fileAbsolutePath" source="fileAbsolutePath" />
        <TextInput label="filename" source="filename" />
        <NumberInput step={1} label="startSample" source="startSample" />
        <ReferenceInput source="title.id" reference="Title" label="title">
          <SelectInput optionText={TitleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
