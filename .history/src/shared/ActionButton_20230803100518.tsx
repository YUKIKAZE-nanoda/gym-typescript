import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    children: React.ReactNode
    setS
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <AnchorLink>
        {children}
    </AnchorLink>
  )
}

export default ActionButton