
export const UserData = ({ user }) => {

    const { name, mail } = user

    return (
        <article
            className="flex flex-col gap-2 p-4 h-full"
        >
            <h1
                className="text-6xl font-bold mb-6"
            >
                User Info
            </h1>
            <div
                className="flex flex-col gap-1"
            >
                <h2
                    className="text-3xl"
                >
                    Name: {name}
                </h2>
                <h2
                    className="text-3xl"
                >
                    Mail: {mail}
                </h2>
            </div>
        </article>
    )
}