import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText';
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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>
                        <span className='text-promary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className='my-5'>
                        Congue nisi vitae suscipit tellus mauris a diam maecenas sed enim.Tll
                    </p>

                </motion.div>

            </motion.div>

        </section>
    )
}

export default ContactUS