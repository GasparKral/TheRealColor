import { useContext } from "react"
import { GeneralContext } from "../../hooks/Context"
import { Link } from "react-router-dom"

export const PleaseLog = () => {

    const { setShowLogIn } = useContext(GeneralContext)

    return (
        <div className="w-full h-full justify-center items-center flex flex-col gap-4">
            <h1 className="text-3xl font-bold">
                Please Log In
            </h1>
            <div
                className="flex gap-2 w"
            >
                <button
                    className="border-2 border-neutral-50 px-4 py-0 rounded-lg hover:bg-neutral-50 hover:text-sky-500 transition-all duration-300 hover:shadow-soft "
                    onClick={() => setShowLogIn(true)}
                >
                    Log In
                </button>
                <Link
                    to="/register"
                    className="border-2 border-neutral-50 px-4 py-0 rounded-lg hover:bg-neutral-50 hover:text-sky-500 transition-all duration-300 hover:shadow-soft"
                >
                    Register
                </Link>
            </div>
        </div>
    )

}