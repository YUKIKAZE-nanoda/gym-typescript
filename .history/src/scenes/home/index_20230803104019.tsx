import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
imoirt
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    return <div>Home</div>

}

export default Home