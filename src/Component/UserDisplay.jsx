import { Link } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
export const UserDisplay = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const logout = () => {
        setIsLoggedIn(false)
    }

    return (

        <AnimatePresence>
            <div
                className="absolute top-3 right-5 w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-800 cursor-pointer"
                onClick={toggle}
            >
                <img
                    src={!isLoggedIn ? "./Fill.png" : "./User.png"}
                    alt="userImage"
                    className="object-center h-full w-full"
                />
            </div>
            {
                isOpen &&

                <motion.menu
                    key={"menu"}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition:
                        {
                            duration: 0.3,
                            easings: "easeIn"

                        }
                    }}
                    exit={{
                        opacity: 0,
                        transition:
                        {
                            duration: 0.3,
                            easings: "easeOut"
                        }
                    }}
                    className="flex flex-col p-2 absolute top-12 [right:68px] text-white bg-zinc-900 rounded-lg ring-2 ring-zinc-500 w-fit gap-2"
                >
                    <button
                        className="border-none text-left"
                    >Export pallette</button>
                    <Link to="/user">User Info</Link>
                    <Link to="/about">About</Link>
                    {isLoggedIn ?
                        <button
                            key={"logout"}
                            onClick={logout}
                            className="text-red-500"
                        >
                            Logout</button>
                        :
                        <div className="flex gap-2 pt-2 border-t border-zinc-500">
                            <button
                                key={"login"}
                                className="text-green-500 bg-green-500 bg-opacity-30 rounded-md p-0.5 w-fit px-2 "
                            >Login
                            </button>
                            <button
                                key={"register"}
                                className="text-blue-500 bg-blue-500 bg-opacity-30 rounded-md w-fit px-2 "
                            >Register
                            </button>
                        </div>}
                </motion.menu>
            }
        </AnimatePresence>

    )
}