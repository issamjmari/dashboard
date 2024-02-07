import { GridColDef } from '@mui/x-data-grid';
import './Add.scss'
type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Add(props: Props) {
  return (
    <div className='add'>
        <div className="model">
            <button className="close" onClick={() => props.setOpen(false)}>X</button>
            <h1>Add new {props.slug}</h1>
            <form>
                {props.columns
                .filter(item => item.field !== "id" && item.field !== "img")
                .map((column) => (
                    <div className="item">
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))
            }
            </form>
            <button className='send'>Send</button>
        </div>
    </div>
  )
}
