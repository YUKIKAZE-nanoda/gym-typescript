import { SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import {motion} from 'framer-motion';
import HText from '@/shared/HText';

const clsses=[
    {
        name:"Weight Training Classes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image:image1
    },
    {
        name:"Yoga Classes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image:image2
        
]
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
                variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                }}
                >
                    <div className='md:w-3/5'>
                        <HText>
                            OUR CLASSES
                        </HText>
                        <p className='py-5'>
                            Fringilla a sed at suspendisse ut mus integer. Nunc amet proin interdum gravida feugiat.
                        </p>
                    </div>

                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px]'>
                        {classes.map((item,index) => (
                            <Class/>
                        ))}
                    </ul>

                </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;