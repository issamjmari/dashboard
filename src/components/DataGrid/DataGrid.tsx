import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import './DataGrid.scss'
import { Link } from 'react-router-dom';

type Props = {
    columns: GridColDef[];
    rows: object[];
    slug: string;
}
export default function DataGridBox(props: Props) {
    const  handleDelete = (id: number) => {
        console.log('id', id, 'has been deleted')
    }
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
        return <div className="action">
        <Link to={`/${props.slug}/${params.row.id}`}>
            <img src='/view.svg' alt="" />
        </Link>
        <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src='/delete.svg' alt="" />
        </div>
    </div>
    }
  }

  return (
    <div className='dataGrid'>
        <div className="grid">
            <DataGrid rows={props.rows} 
            columns={[...props.columns, actionColumn]}
            initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
            }}
            className='gridTable'
            slots={{toolbar: GridToolbar}}
            slotProps={{
                toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: {debounceMs: 500}
                }
            }}
            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector
            />
        </div>
    </div>
  )
}
