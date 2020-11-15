import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../components/Users";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const Membership = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
    </Admin>
  );
};

export default Membership;
