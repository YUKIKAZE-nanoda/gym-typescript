import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUS = ({ setSelectedPage }: Props) => {
    return (
        <section id="contactus" className='mx-auto w-5/6 pt-24 '>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUS)}
            >
                {/* header */}
                <motion.div className='md:w-3/5'
                initial={{opacity:0,x:-50}}
                >

                </motion.div>

            </motion.div>

        </section>
    )
}

export default ContactUS