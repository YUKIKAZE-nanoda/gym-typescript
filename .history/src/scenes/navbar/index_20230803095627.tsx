import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        </div>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                <img alt="logo" src={Logo} />
                {isAboveMediumScreens ? 

                <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <button>Become a Menber</button>
                </div> :
            </div>

        </div>
    </nav>

}

export default Navbar;