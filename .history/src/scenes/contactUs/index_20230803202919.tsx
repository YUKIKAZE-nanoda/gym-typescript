import { SelectedPage } from '@/shared/types';
import {motion} from 'framer-motion'
import {useForm} from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUS = ({selectedPage}: Props) => {
  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 '>
        <motion.div>
            
        </motion.div>

    </section>
  )
}

export default ContactUS