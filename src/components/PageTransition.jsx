import { motion } from 'framer-motion'

const MotionDiv = motion.div

export default function PageTransition({ children }) {
  return (
    <MotionDiv
      className="page-transition"
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  )
}
