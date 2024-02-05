import TopBar from '../../components/TopBar/TopBar'
import CharBox from '../../components/chartBox/charBox'
import './Home.scss'

export default function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBar />
      </div>
      <div className="box box2"><CharBox /></div>
      <div className="box box3"><CharBox /></div>
      <div className="box box4"><CharBox /></div>
      <div className="box box5"><CharBox /></div>
      <div className="box box6">Box6</div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </div>
  )
}
