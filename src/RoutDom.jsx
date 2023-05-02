import React from 'react'
import Modules from './component/modules/Modules'
import { Routes, Route } from 'react-router-dom'

const RoutDom = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/Modules" element={<Modules />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default RoutDom
