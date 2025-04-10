import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'
import MapChartPage from './pages/MapChartPage'
import LineChartPage from './pages/LineChartPage'
import BarChartPage from './pages/BarChartPage'
import BubbleChartPage from './pages/BubbleChartPage'
import PieChartPage from './pages/PieChartPage'
import DataPage from './pages/DataPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<OverviewPage />}></Route>
          <Route path='/charts/map' element={<MapChartPage />}/>
          <Route path='/charts/line' element={<LineChartPage />}/>
          <Route path='/charts/bar' element={<BarChartPage />}/>
          <Route path='/charts/bubble' element={<BubbleChartPage />}/>
          <Route path='/charts/pie' element={<PieChartPage />}/>
          <Route path='/data' element={<DataPage />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
