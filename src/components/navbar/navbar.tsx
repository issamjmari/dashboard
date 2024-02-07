import './navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className='logo'>
            <img src='/logo.svg' alt="logo"/>
            <span>lamadmin</span>
        </div>
        <div className='icons'>
          <img src='/search.svg' alt="logo" className='icon'/>
          <img src='/app.svg' alt="logo" className='icon'/>
          <img src='/expand.svg' alt="logo" className='icon'/>
          <div className='notification'>
            <img src='/notifications.svg' alt="logo"/>
            <span>1</span>
          </div>
          <div className='user'>
            <img
              src='https://cdn.intra.42.fr/users/1312e60531fd16557839bc942ae10856/ijmari.jpg'
              alt="user image"
             />
             <span>Issam</span>
          </div>
          <img src='/settings.svg' alt="settings"/>
        </div>
    </div>
  )
}
