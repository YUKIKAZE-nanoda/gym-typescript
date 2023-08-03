import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string
};


const Link = ({ page, }: Props) => {
    const lowerCasePage=page.toLowerCase().replace(" ", "-")
    return (
        <AnchorLink
        className={}
        href={`home`}
        onClick={}
        >
            {page}
        </AnchorLink>
    )
}

export default Link