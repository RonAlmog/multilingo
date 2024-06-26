import { Edit, SimpleForm, TextInput, required } from "react-admin";

export const CourseEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" validate={[required()]} label="ID" />
        <TextInput
          source="title"
          validate={[required()]}
          label="Title"
          fullWidth
        />
        <TextInput
          source="imageSrc"
          validate={[required()]}
          label="Image"
          fullWidth
        />
      </SimpleForm>
    </Edit>
  );
};
