import './menu.scss'
import {menu} from '../../data'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="menu">
        {
          menu.map((item) => (
              <div className='item' key={item.id}>
                  <span className='title'>{item.title}</span>
                  {
                    item.listItems.map((listItem) => (
                      <Link className='listItem' to={listItem.url} key={listItem.id}>
                        <img src={listItem.icon}></img>
                        <span>{listItem.title}</span>
                      </Link>
                    ))
                  }
              </div>
          ))
        }
    </div>
  )
}
