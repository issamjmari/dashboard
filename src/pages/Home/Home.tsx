import TopBar from '../../components/TopBar/TopBar'
import CharBox from '../../components/chartBox/charBox'
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './Home.scss'

export default function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBar />
      </div>
      <div className="box box2"><CharBox {...chartBoxUser} /></div>
      <div className="box box3"><CharBox {...chartBoxProduct}/></div>
      <div className="box box4">Box4</div>
      <div className="box box5"><CharBox {...chartBoxConversion}/></div>
      <div className="box box6"><CharBox {...chartBoxRevenue}/></div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </div>
  )
}
