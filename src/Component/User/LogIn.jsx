import { Close } from "../../assets/Close"
import { Eye } from "../../assets/Eye"
import { EyeOf } from "../../assets/EyeOf"
import { useContext, useRef, useState } from "react"
import { GeneralContext } from "../../hooks/Context"
import { useOnClickOutside } from 'usehooks-ts'
import { Link } from "react-router-dom"

export const LogIn = () => {
    const { setShowLogIn } = useContext(GeneralContext)
    const [showPassword, setShowPassword] = useState(false)
    const formRef = useRef(null)
    const passwordRef = useRef(null)

    useOnClickOutside(formRef, () => setShowLogIn(false))

    const togglePassword = (event) => {
        event.preventDefault()
        if (passwordRef.current.type === "password") {
            setShowPassword(true)
            passwordRef.current.type = "text"
        } else {
            setShowPassword(false)
            passwordRef.current.type = "password"
        }
    }

    return (
        <form
            ref={formRef}
            className="w-fit h-fit fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-gradient-to-b from-[#fafafa50] to-[#1c1c1c10] bg-neutral-800 bg-opacity-10
             backdrop-blur-lg rounded-lg shadow-xl z-20 grid grid-cols-2 grid-auto-rows-auto gap-4 border-[1px] border-neutral-50 px-10 text-neutral-50"
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

            <h1
                className="text-3xl font-bold col-span-2 text-center mb-4"
            >Log In</h1>

            <label htmlFor="name"
                className="col-span-2 flex justify-between w-full"
            >
                User:
                <input
                    className="ml-2 rounded-sm"
                    type="text"
                    name="name"
                    id="name"
                    minLength={3}
                    pattern="[a-zA-Z]+"
                    placeholder="Enter name or an email"
                />
            </label>
            <label htmlFor="password"
                className="col-span-2 flex justify-between w-full"
            >
                Password:
                <input
                    ref={passwordRef}
                    className="ml-2 rounded-sm"
                    type="password"
                    name="password"
                    id="password"
                    minLength={8}
                    pattern="[a-zA-Z0-9]+"
                />
            </label>
            <button
                onClick={togglePassword}
                className="absolute right-10 top-[143px] z-20 text-zinc-800 hover:text-blue-500 bg-neutral-100 rounded-r-lg border-l-2 border-neutral-900 transition-colors duration-200"
            >
                {showPassword ? <EyeOf /> : <Eye />}
            </button>
            <div
                className="col-span-2 flex justify-between w-full"
            >
                <button
                    onClick={() => setShowLogIn(false)}
                    className="col-span-2 bg-transparent hover:underline rounded-md transition-colors easeIn duration-300"
                >
                    Forgot Password?
                </button>
                <Link
                    onClick={() => setShowLogIn(false)}
                    to={"/register"}
                    className="col-span-2 bg-transparent hover:underline rounded-md  transition-colors easeIn duration-300"
                >
                    Register
                </Link>
            </div>
            <button
                className="col-span-2 mt-4 bg-transparent hover:bg-neutral-50 hover:text-zinc-900 rounded-md ring-2 ring-neutral-50 transition-colors easeIn duration-300"
            >
                Log In
            </button>
        </form>
    )
}