import { React } from "react";
import OneEmployee from "./OneEmployee";
import CreateEmployee from "./CreateEmployee";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";

function UserList(){
    return (<div>
        <h2>Component EmployeeList</h2>
        <OneEmployee/>
        <CreateEmployee/>
        <EditEmployee/>
        <DeleteEmployee/>
    </div>)
}

export default UserList