import './TopBar.scss'
import '../../data'
import { topDealUsers } from '../../data'

export default function TopBar() {
  return (
    <div className='topBar'>
        <h1>Top Deals</h1>
        <div className='list'>
            {topDealUsers.map((user) => (
                <div className='listItem' key={user.id}>
                    <div className="user">
                        <img src={user.img}/>
                        <div className="userTexts">
                            <span className="username">{user.username}</span>
                            <span className="email">{user.email}</span>
                        </div>
                    </div>
                    <span className="amount">{user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
