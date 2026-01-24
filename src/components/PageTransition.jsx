// components/PageTransition.jsx
import { motion } from 'framer-motion'

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -30, filter: 'blur(6px)' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}
