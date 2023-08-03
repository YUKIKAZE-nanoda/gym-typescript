import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink className="rounded-md bg-secondart-500 px-10">
        {children}
    </AnchorLink>
  )
}

export default ActionButton