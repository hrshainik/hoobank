import styles from "../style";
import { arrowUp } from "../assets";
import {motion} from "framer-motion"

const GetStarted = () => (
  <motion.div initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    default: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01]
    },
    scale: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      restDelta: 0.001
    }
  }} className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </motion.div>
);

export default GetStarted;