import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    chil
}

const ActionButton = ({children}: Props) => {
  return (
    <AnchorLink>
        {children}
    </AnchorLink>
  )
}

export default ActionButton