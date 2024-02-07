import DataGridBox from "../../components/DataGrid/DataGrid";
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows } from "../../data";
import './Users.scss'
import { useState } from "react";
import Add from "../../components/Add/Add";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: "img", 
      headerName: "avatar", 
      width: 100,
      type: "string",
      renderCell: (params) => {
          return <img src={params.row.img || "/noavatar.png"} alt=""/>
      }
  },
  {
      field:"status",
      headerName: "status",
      type: "boolean",
      width: 100
  },
  {
    field: 'firstName',
    headerName: 'First name',
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    type: "string",
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export default function Users() {

  const [open, setOpen] = useState(false)
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataGridBox columns={columns} rows={userRows} slug="users" />
      {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}
