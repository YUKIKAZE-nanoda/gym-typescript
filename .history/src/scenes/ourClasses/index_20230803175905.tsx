import { SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import {motion} from 'framer-motion';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section className='w-full bg-primary-100 py-40' id="ourclasses">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>

                <motion.div className='me-auto w-5/6'
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.2,duration:0.5}}
                viewport={{once:true,amount:0.5}}
                variants={{}
                
                >

                </motion.div>
        </motion.div>
    </section>
  )
}

export default OurClasses;