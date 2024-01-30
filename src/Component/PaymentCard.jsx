
export const PaymentCard = ({ name, price, description }) => {

    return (
        <article
            className="h-3/5 w-1/4 flex flex-col gap-2 p-4 border-2 border-neutral-50 backdrop-blur-lg rounded-lg hover:shadow-glow transition-shadow  duration-300 relative"
        >
            <h1
                className="text-2xl font-bold"
            >{name}</h1>
            <p>{description}</p>
            <h3
                className="text-3xl font-bold absolute bottom-4 right-1/2 translate-x-1/2 tracking-wide"
            >
                {price}
            </h3>
        </article>
    )

}