import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import PedidoOriginal from './components/PedidoOriginal'
import SeisMeses from './components/SeisMeses'

const MotionDiv = motion.div

function Rotas() {
  const location = useLocation()

  return (
    <div className="app">
      <div className="ambient-glow ambient-glow--one" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--two" aria-hidden="true" />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PedidoOriginal />} />
          <Route path="/6-meses" element={<SeisMeses />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Rotas />
      </MotionDiv>
    </BrowserRouter>
  )
}
