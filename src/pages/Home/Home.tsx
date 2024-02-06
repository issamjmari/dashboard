import BarChartBox from '../../components/BarChartBox/BarChartBox'
import BigChartBox from '../../components/BigChartBox/BigChartBox'
import TopBar from '../../components/TopBar/TopBar'
import CharBox from '../../components/chartBox/charBox'
import PieChartBox from '../../components/pieChart/pieChart'
import PieChart from '../../components/pieChart/pieChart'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './Home.scss'

export default function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBar />
      </div>
      <div className="box box2"><CharBox {...chartBoxUser} /></div>
      <div className="box box3"><CharBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox /></div>
      <div className="box box5"><CharBox {...chartBoxConversion}/></div>
      <div className="box box6"><CharBox {...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox /></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}
