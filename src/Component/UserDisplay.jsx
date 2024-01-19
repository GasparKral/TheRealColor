import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useOnClickOutside } from 'usehooks-ts'

export const UserDisplay = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const closeRef = useRef(null)

    useOnClickOutside(closeRef, () => setIsOpen(false))

    const toggle = () => setIsOpen(!isOpen)

    const logout = () => {
        setIsLoggedIn(false)
    }

    return (

        <AnimatePresence>
            <div
                className="absolute top-3 right-5 w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-500 cursor-pointer"
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
                    ref={closeRef}
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
                        className="border-none text-left  hover:bg-zinc-500 hover:bg-opacity-30 rounded-md px-1 transition-colors"
                    >
                        Export pallette
                    </button>
                    <Link
                        to="/user"
                        className=" hover:bg-zinc-500 hover:bg-opacity-30 rounded-md px-1 transition-colors "
                    >
                        User Info
                    </Link>
                    <Link
                        to="/about"
                        className=" hover:bg-zinc-500 hover:bg-opacity-30 rounded-md px-1 transition-colors"
                    >
                        About
                    </Link>
                    {isLoggedIn ?
                        <button
                            key={"logout"}
                            onClick={logout}
                            className="text-red-500"
                        >
                            Logout</button>
                        :
                        <div className="flex gap-2 pt-2 border-t border-zinc-500">
                            <Link
                                className="text-green-500 bg-green-500 bg-opacity-30 rounded-md p-0.5 w-fit px-2 hover:text-green-100 hover:bg-opacity-70 transition-colors flex items-center"
                                key={"login"}
                                to="/login"
                            >
                                Login
                            </Link>
                            <Link
                                key={"register"}
                                to={"/login"}
                                className="text-blue-500 bg-blue-500 bg-opacity-30 rounded-md w-fit px-2 hover:text-blue-100 hover:bg-opacity-70 transition-colors flex items-center"
                            >
                                Register
                            </Link>
                        </div>}
                </motion.menu>
            }
        </AnimatePresence>

    )
}