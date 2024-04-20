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
const WeaponsTitle = () => {
  const record = useRecordContext();
  return <span>Weapons {record ? `"${record.gunName}"` : ''}</span>;
};

export const WeaponsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="gunName" />
      <NumberField source="damage" />
      <NumberField source="range" />
      <NumberField source="ammoCapacity" />
      <NumberField source="costInCoins" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const WeaponsEdit = () => (
  <Edit title={<WeaponsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="gunName" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="damage" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="range" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="ammoCapacity" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="costInCoins" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const WeaponsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="gunName" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="damage" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="range" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="ammoCapacity" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="costInCoins" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
];
