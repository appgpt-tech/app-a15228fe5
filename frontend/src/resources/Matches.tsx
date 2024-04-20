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
const MatchesTitle = () => {
  const record = useRecordContext();
  return <span>Matches {record ? `"${record.matchID}"` : ''}</span>;
};

export const MatchesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="matchID" />
      <ReferenceField source="participants" reference="Players" />
      <DateField source="matchStartTime" />
      <DateField source="matchEndTime" />
      <TextField source="matchResult" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const MatchesEdit = () => (
  <Edit title={<MatchesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="matchID" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="participants" reference="Players" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="matchStartTime" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="matchEndTime" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="matchResult" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const MatchesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="matchID" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="participants" reference="Players" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="matchStartTime" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="matchEndTime" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="matchResult" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput
    source="participants"
    label="participants"
    reference="Players"
    alwaysOn
  />,
  ,
  ,
  ,
];