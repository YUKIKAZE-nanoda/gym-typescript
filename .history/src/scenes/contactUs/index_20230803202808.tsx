import { SelectedPage } from '@/shared/types';
import {motion} from 'framer-motion'
import {useForm} from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUS = ({selectedPage}: Props) => {
  return (
    <section id="contact">

    </section>
  )
}

export default ContactUS