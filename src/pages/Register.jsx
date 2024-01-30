import { useState, useRef } from "react"
import { Eye } from "../assets/Eye"
import { EyeOf } from "../assets/EyeOf"

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)

    const passwordRef = useRef(null)

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
        <main
            className="w-screen h-screen flex items-center justify-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 text-neutral-50"
        >

            <button
                onClick={() => window.history.back()}
                className="absolute top-4 left-4"
            >
                <svg
                    fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>

            <form action="/"
                className="w-fit h-fit p-8 bg-gradient-to-b from-[#fafafa50] to-[#1c1c1c30] backdrop-blur-lg z-20 rounded-lg shadow-soft
                flex flex-col gap-2 border-[1px] border-neutral-50 text-neutral-50 "
            >

                <h1
                    className="text-3xl font-bold text-center mb-8"
                >
                    Register
                </h1>
                <fieldset
                    className="flex flex-col justify-center items-center gap-2"
                >
                    <label htmlFor="username"
                        className="grid grid-cols-3"
                    >
                        User Name:
                        <input type="text" name="username" id="username"
                            className="col-span-2"
                        />
                    </label>
                    <label htmlFor="email"
                        className="grid grid-cols-3"
                    >
                        Email:
                        <input type="email" name="email" id="email"
                            className="col-span-2"
                        />
                    </label>
                    <label htmlFor="password"
                        className="grid grid-cols-3"
                    >
                        Password:
                        <input type="password" name="password" id="password"
                            ref={passwordRef}
                            className="col-span-2"
                        />
                        <button
                            onClick={(event) => togglePassword(event)}
                            className="absolute right-8 bottom-[28.7%] bg-neutral-100 rounded-r-lg border-l-2 border-neutral-900 text-neutral-900 hover:text-blue-600"
                        >
                            {showPassword ? <EyeOf /> : <Eye />}
                        </button>
                    </label>

                    <button
                        type="submit"
                        className=" w-3/4 mt-4 bg-transparent hover:bg-neutral-50 hover:text-zinc-900 rounded-md ring-2 ring-neutral-50 transition-colors easeIn duration-300"
                    >
                        Register
                    </button>
                </fieldset>
            </form>

        </main >
    )

}

export default Register