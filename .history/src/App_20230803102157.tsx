import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import {SelectedPage} from "@/shared/types";
enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
  return (
    <div className='app bg-gray-20'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App