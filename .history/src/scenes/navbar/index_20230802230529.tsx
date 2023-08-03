import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            m
        </div>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                <img alt="logo" src={Logo} />

                <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page="Home" selectedPage={selectedP}/>
                    <Link page="Benefits"/>
                    <Link page="Our Classes"/>
                    <Link page="Contact Us"/>
                </div>
                <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <button>Become a Menber</button>
                </div>
            </div>
       
        </div>
    </nav>

}

export default Navbar;