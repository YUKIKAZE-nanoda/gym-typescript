import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { homedir } from "os";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 md:pt-20 md:gap-0 md:grid md:grid-cols-2"
    >
        {/* image and mani header */}
        <div>
            {/* main header */}
            <div>
                {/* heading */}
                <div>
                    <div>
                        <img alt="home-page-text" src={HomePageText} />
                    </div>
                </div>
                <
            </div>
            {/* img */}
        </div>

    </section>

}

export default Home