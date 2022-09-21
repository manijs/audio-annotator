import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AnnotationTitle } from "../annotation/AnnotationTitle";
import { TitleTitle } from "../title/TitleTitle";

export const SegmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
