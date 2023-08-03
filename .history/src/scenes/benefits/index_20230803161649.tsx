import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="w-10 h-10 text-primary-500" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        icon: <UserGroupIcon className="w-10 h-10 text-primary-500" />,
        title: "100 different classes per week",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
        icon: <AcademicCapIcon className="w-10 h-10 text-primary-500" />,
        title: "Expert Personal Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
];

const container = {
    hidden:{},
    visible:{
        transition:{staggerChildern:0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div 
                className="md:my-5 md:w-3/5"
                initial='hidden'
                whileInView='visible'
                >
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We are a community of like-minded people, who are passionate about
                    </p>
                </motion.div>

                {/* benefits */}
                <motion.div 
                className="my-5 items-center justify-between gap-8 md:fx"
                initial="hidden"
                whileInView="visible"
                variants={container}
                viewport={{once:true,amount:0.5}}
                
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage} />)
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Benefits;