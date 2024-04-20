//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const TeamsTitle = () => {
  const record = useRecordContext();
  return <span>Teams {record ? `"${record.teamName}"` : ''}</span>;
};

export const TeamsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="teamName" />
      <ReferenceField source="members" reference="Players" />
      <NumberField source="teamScore" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const TeamsEdit = () => (
  <Edit title={<TeamsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="teamName" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="members" reference="Players" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="teamScore" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const TeamsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="teamName" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="members" reference="Players" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="teamScore" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput
    source="members"
    label="members"
    reference="Players"
    alwaysOn
  />,
  ,
];
