import Single from '../../components/Single/Single'
import { singleUser } from '../../data'
import './user.scss'

export default function User() {
  return (
    <div className='user'>
      <Single {...singleUser} />
    </div>
  )
}
