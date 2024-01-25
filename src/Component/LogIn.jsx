import { Close } from "../assets/Close"
import { useContext, useRef } from "react"
import { GeneralContext } from "../hooks/Context"
import { useOnClickOutside } from 'usehooks-ts'

export const LogIn = () => {
    const { setShowLogIn } = useContext(GeneralContext)
    const formRef = useRef(null)

    useOnClickOutside(formRef, () => setShowLogIn(false))

    return (
        <form
            ref={formRef}
            className="w-fit h-fit fixed content-center p-8 bg-zinc-900 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl z-20 grid grid-cols-2   gird-auto-rows-auto gap-4 ring-2 ring-neutral-50 pt-12 pl-4 pr-10"
        >
            <div
                className="w-full flex justify-end col-span-2 absolute top-2 right-2"
            >
                <button
                    onClick={() => setShowLogIn(false)}
                >
                    <Close />
                </button>
            </div>
            <label htmlFor="name"
                className="col-span-2 flex justify-between w-full"
            >
                Name:
                <input
                    className="ml-2 rounded-sm"
                    type="text"
                    minLength={3}
                    pattern="[a-zA-Z]+"
                    placeholder="Enter name"
                />
            </label>
            <label htmlFor="email"
                className="col-span-2 flex justify-between w-full"
            >
                Email:
                <input
                    className="ml-2 rounded-sm"
                    type="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    placeholder="example@example.com"
                />
            </label>
            <label htmlFor="password"
                className="col-span-2 flex justify-between w-full"
            >
                Password:
                <input
                    className="ml-2 rounded-sm"
                    type="password"
                    minLength={8}
                    pattern="[a-zA-Z0-9]+"
                />
            </label>
        </form>
    )
}