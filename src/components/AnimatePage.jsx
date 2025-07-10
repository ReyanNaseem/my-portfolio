import { motion } from 'framer-motion'

const AnimatePage = ({children}) => {

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`layer${i}`}
          variants={transition}
          style={{top: `calc(5dvh * ${i})`}}
          transition={{delay: 0.02 * i}}
          className="fixed left-0 h-[5dvh] z-50 bg-[linear-gradient(to_right,#1d4ed8,#76adcf)]"
        />
      ))}
      {children}
    </motion.div>
  );
}

const transition = {
    initial:{
        width: '100%'
    },
    animate:{
        width: '0%'
    },
    exit:{
        width:'100%'
    }
}

export default AnimatePage