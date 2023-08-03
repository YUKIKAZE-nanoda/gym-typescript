import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
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
    hidden: {},
    visible: {
        transition: { staggerChildern: 0.2 }
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
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
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
                    viewport={{ once: true, amount: 0.5 }}

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
                {/* graphics and description */}
                <div className="mt-16 ">
                    {/* graphic */}
                    <img 
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}

                    />
                    {/* description */}
                    <div>
                        {/* title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-;eft-20 before:z-[1] before:contenr-abstractwaves">
                                <div>
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{""}
                                        <span className="text-primary-500"> FIT</span>
                                    </HText>
                                </div>
                            </div>
                        </div>
                        {/*descript  */}
                        <div>
                            <p className="my-5">After building high-fidelity prototypes,
                                user testing is a key next step, and capturing the best information is important.
                                With Axure RP, you can prototype and test like it’s the real thing and gather important feedback and data before moving on to development.
                                To make this process as seamless as possible, we compiled a list of user testing tools that integrate well with Axure,
                                including the new Maze Axure RP </p>
                            <p className="mb-5">
                                70 billion parameter open source model by Meta fine-tuned for chat purposes.
                                LLaMA v2 was trained on more data (~2 trillion tokens)
                                compared to LLaMA v1 and supports context windows up to 4k tokens.
                            </p>
                        </div>
                        {/* button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-buttom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>

                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Benefits;