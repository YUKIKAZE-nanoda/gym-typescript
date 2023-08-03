
type Props = {
    name: string,
    description?: string,
    image: string
}

const Class = ({ name, description, image }: Props) => {
    const overlayStyles=`p-5 absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 text-white`
    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div>
                <p>{name}</p>
                <p>{description}</p>
                
            </div>
            <img src={image} alt={`${image}`} className="w-full h-full object-cover rounded-md" />
        </li>
    )
}

export default Class