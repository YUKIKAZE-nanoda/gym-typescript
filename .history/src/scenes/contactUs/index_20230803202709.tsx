import { SelectedPage } from '@/shared/types';
import {motion} from 'framer-motion'
import {useForm} from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/C'
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const index = ({selectedPage}: Props) => {
  return (
    <div>index</div>
  )
}

export default index