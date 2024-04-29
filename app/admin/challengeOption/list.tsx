import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  Pagination,
  ReferenceField,
  TextField,
} from "react-admin";

const ChallengeOptionsPagination = () => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />
);

export const ChallengeOptionList = () => {
  return (
    <List title="Challenge Options" pagination={<ChallengeOptionsPagination />}>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challengeId" reference="challenges" />
        <TextField source="imageSrc" />
        <TextField source="audioSrc" />
        <NumberField source="order" />
      </Datagrid>
    </List>
  );
};
