import { Close } from "../../assets/Close"
import { Eye } from "../../assets/Eye"
import { EyeOf } from "../../assets/EyeOf"
import { useContext, useRef, useState } from "react"
import { GeneralContext } from "../../hooks/Context"
import { useOnClickOutside } from 'usehooks-ts'
import { Link } from "react-router-dom"

export const LogIn = () => {

    const { setShowLogIn, setIsLoggedIn, isLoggedIn, setUser } = useContext(GeneralContext)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        try {
            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(formData)),
            })
                .then((res) => { const data = res.json(); return data })
                .then((data) => {
                    if (data != false) {
                        setUser(data)
                        setShowLogIn(false)
                        localStorage.setItem("loggedIn", true)
                        localStorage.setItem("user", JSON.stringify(data.name))
                        setIsLoggedIn(true)
                    } else {
                        setIsLoggedIn(false)
                    }
                })

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
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
                    style={{
                        borderColor: isLoggedIn === false ? "#f43f5e" : "white",
                        color: isLoggedIn === false ? "#f43f5e" : "#1c1c1c",
                        backgroundColor: isLoggedIn === false ? "#ffcccc" : "white",
                        placeholder: isLoggedIn === false ? "#f43f5e" : "white",
                    }}
                    type="text"
                    name="name"
                    id="name"
                    minLength={3}
                    placeholder="Enter name or an email"
                    required
                />
            </label>
            <label htmlFor="password"
                className="col-span-2 flex justify-between w-full"
            >
                Password:
                <input
                    style={{
                        borderColor: isLoggedIn === false ? "#f43f5e" : "white",
                        color: isLoggedIn === false ? "#f43f5e" : "#1c1c1c",
                        backgroundColor: isLoggedIn === false ? "#ffcccc" : "white",
                        placeholder: isLoggedIn === false ? "#f43f5e" : "white",
                    }}
                    ref={passwordRef}
                    className="ml-2 rounded-sm transition-colors duration-200"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                />
            </label>
            <button
                onClick={togglePassword}
                className="absolute right-11 top-[143px] z-20 text-zinc-800 hover:text-blue-500 bg-neutral-100 rounded-r-lg border-l-2 border-neutral-900 transition-colors duration-200"
                style={{
                    borderColor: isLoggedIn === false ? "#f43f5e" : "white",
                    color: isLoggedIn === false ? "#f43f5e" : "#1c1c1c",
                    backgroundColor: isLoggedIn === false ? "#ffcccc" : "white",
                }}
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
                type="submit"
                className="col-span-2 mt-4 bg-transparent hover:bg-neutral-50 hover:text-zinc-900 rounded-md ring-2 ring-neutral-50 transition-colors easeIn duration-300"
            >
                Log In
            </button>
        </form>
    )
}