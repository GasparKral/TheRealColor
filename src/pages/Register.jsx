import { useState, useRef, useContext } from "react"
import { Eye } from "../assets/Eye"
import { EyeOf } from "../assets/EyeOf"
import { GeneralContext } from "../hooks/Context"

const Register = () => {

    const { setIsLoggedIn, setUser } = useContext(GeneralContext)
    const [showPassword, setShowPassword] = useState(false)
    const [existUser, setExistUser] = useState(false)

    const passwordRef = useRef(null)
    const formRef = useRef(null)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/createUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(formRef.current))),
        })
            .then(res => {
                if (res.status === 200) {
                    setExistUser(false)
                    setIsLoggedIn(true)
                    setUser(JSON.parse(localStorage.getItem("user")))
                    window.localStorage.setItem("loggedIn", true)
                    window.localStorage.setItem("user", JSON.stringify(JSON.parse(localStorage.getItem("user")).name))

                } else {
                    setExistUser(true)
                }
            })
    }

    return (
        <main
            className="w-screen h-screen flex items-center justify-center bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-teal-500 via-sky-600 via-40% to-indigo-700 text-neutral-50"
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

            <form
                onSubmit={(e) => handleSubmit(e)}
                ref={formRef}
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
                    <label htmlFor="name"
                        className="grid grid-cols-3"
                    >
                        User Name:
                        <input type="text" name="name" id="name"
                            className="col-span-2"
                        />
                    </label>
                    <label htmlFor="mail"
                        className="grid grid-cols-3"
                    >
                        Email:
                        <input type="email" name="mail" id="mail"
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
                            className="absolute right-8 top-[177px] bg-neutral-100 rounded-r-lg border-l-2 border-neutral-900 text-neutral-900 hover:text-blue-600"
                        >
                            {showPassword ? <EyeOf /> : <Eye />}
                        </button>
                    </label>
                    <p
                        className={`text-neutral-50 text-sm ${existUser ? "block" : "hidden"} text-xl`}
                    >
                        The acount Name already exist
                    </p>
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