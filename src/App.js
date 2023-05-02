import './App.css'
import AmdRadeon from './component/amdradeon/AmdRadeon'
import Banner from './component/banner/Banner'
import Categories from './component/categories/Categories'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Latest from './component/latest/Latest'
import Processoe from './component/processor/Processoe'
import RtxCard from './component/rtxcard/RtxCard'
import Sidebar from './component/sidebar/Sidebar'
import SpecialCombo from './component/specialcombo/SpecialCombo'
import Thermal from './component/thermal/Thermal'
import Wacom from './component/wacom/Wacom'
import WClients from './component/wclients/WClients'

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Banner />
      <Sidebar />
      <Processoe />
      <SpecialCombo />
      <RtxCard />
      <AmdRadeon />
      <Wacom />
      <Thermal />
      <Latest />
      <WClients />
      <Footer />
    </div>
  )
}

export default App
