import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
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
                <div className="md:my-5 md:">
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We are a community of like-minded people, who are passionate about
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

export default Benefits;