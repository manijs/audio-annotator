import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";
import { SegmentTitle } from "../segment/SegmentTitle";

export const TitleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="project.id" reference="Project" label="project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput
          label="refTranscription"
          multiline
          source="refTranscription"
        />
        <NumberInput label="sampleRate" source="sampleRate" />
        <ReferenceArrayInput
          source="segments"
          reference="Segment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SegmentTitle} />
        </ReferenceArrayInput>
        <NumberInput label="sourceDuration" source="sourceDuration" />
        <TextInput label="sourceFilename" source="sourceFilename" />
        <TextInput label="sourceFilePath" source="sourceFilePath" />
        <NumberInput label="sourceFileSize" source="sourceFileSize" />
      </SimpleForm>
    </Create>
  );
};
