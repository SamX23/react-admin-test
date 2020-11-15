import { List, Datagrid, TextField, EmailField, UrlField } from "react-admin";
import UrlFieldCustom from "./UrlFieldCustom";

export const UserList = (props) => {
  console.log(props);

  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <UrlFieldCustom source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
