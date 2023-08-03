import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUS = ({ setSelectedPage }: Props) => {

    const { register, trigger, formState: { errors } } = useForm();
    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (isValid) {
            e.preventDefault();
        }
    }

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
                        Congue nisi vitae suscipit tellus mauris a diam maecenas sed enim.Tllus mauris a diam maecenas sed enim.
                    </p>
                </motion.div>
                {/* form and image */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-0 md:mt-0 md:w-3/5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <form
                            target='_blank'
                            onSubmit={onSubmit}
                            method='POST'
                            action="https://formsubmit.co/6a4e9e2a0a0a4a0a0a4e9e2a0a0a4a0a"
                        >
                            <input
                                className={inputStyles}
                                type='text'
                                placeholder='Name'
                                {...register('name', {
                                    required: true,
                                    maxLength: 80,
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === 'required' && 'Name is required'}
                                    {errors.name.type === 'maxLength' && 'Name cannot exceed 80 characters'}
                                </p>
                            )}

                            <input
                                className={inputStyles}
                                type='text'
                                placeholder='Email'
                                {...register('email', {
                                    required: true,
                                    maxLength: 80,
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === 'required' && 'Email is required'}
                                    {errors.email.type === 'maxLength' && 'Email cannot exceed 80 characters'}
                                </p>
                            )}

                        </form>
                    </motion.div>

                </div>

            </motion.div>

        </section>
    )
}

export default ContactUS