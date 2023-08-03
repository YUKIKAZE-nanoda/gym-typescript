
type Props = {
    name: string,
    description?: string,
    image: string
}

const Class = ({ name, description, image }: Props) => {
    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div>
                <p>{name}</p>
                <p>{description}</p>
                
            </div>
            <img src={image} alt={`${ima}`} className="w-full h-full object-cover rounded-md" />
        </li>
    )
}

export default Class