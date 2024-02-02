
export const UserData = ({ user }) => {

    const { name, mail } = user

    return (
        <article
            className="flex flex-col gap-2 p-4 border-2 border-neutral-50 backdrop-blur-lg rounded-lg hover:shadow-glow transition-shadow h-full duration-300 relative"
        >
            <h1
                className="text-3xl font-bold"
            >User Info</h1>
            <div
                className="flex flex-col gap-1"
            >
                <p>Name: {name}</p>
                <p>Mail: {mail}</p>
            </div>
        </article>
    )
}