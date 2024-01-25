import { Close } from "../assets/Close"
import { useContext, useRef } from "react"
import { GeneralContext } from "../hooks/Context"
import { useOnClickOutside } from 'usehooks-ts'


export const LogIn = () => {

    const { setShowLogIn } = useContext(GeneralContext)
    const closeRef = useRef(null)
    useOnClickOutside(closeRef, () => setShowLogIn(false))

    return (
        <form
            ref={closeRef}
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
            <label htmlFor=""
                className="col-span-2 flex justify-between w-full"
            >
                name:
                <input
                    className="ml-2 rounded-sm"
                    type="text"
                    min={3}
                    pattern="[a-zA-Z]"
                    placeholder="Juan, Ana, etc..."
                />
            </label>
            <label htmlFor=""
                className="col-span-2 flex justify-between w-full"
            >
                email:
                <input
                    className="ml-2 rounded-sm"
                    type="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
                    placeholder="...@example.com"
                />
            </label>
            <label htmlFor=""
                className="col-span-2 flex justify-between w-full"
            >
                password:
                <input
                    className="ml-2 rounded-sm"
                    type="password"
                    minLength={8}
                    pattern="[a-zA-Z0-9]"
                />
            </label>
        </form>
    )

}
