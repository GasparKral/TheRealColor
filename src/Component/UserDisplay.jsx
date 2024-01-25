import { Link } from "react-router-dom"
import { useState, useRef, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useOnClickOutside } from 'usehooks-ts'
import { GeneralContext } from "../hooks/Context"
import { exportPalletteAsTailwind } from "../hooks/logic/exportPalletteAsTailwinf"
import { exportPalletteAsCSS } from "../hooks/logic/exportPalletteAsCSS"
import { exportPalletteAsJSON } from "../hooks/logic/exportPalletteAsJSON"

export const UserDisplay = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [moreTipes, setMoreTypes] = useState(false)

    const closeRef = useRef(null)

    const { setPallettes, setShowLogIn, setIsLoggedIn, isLoggedIn } = useContext(GeneralContext)

    useOnClickOutside(closeRef, () => setIsOpen(false))

    const toggle = () => setIsOpen(!isOpen)

    const login = () => {
        if (window - localStorage.getItem("loggedIn")) {
            setIsLoggedIn(true)
        } else {
            setShowLogIn(true)
        }
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    const variants = {
        open: { opacity: 1, transition: { delay: 0.6, duration: 0.3 } },
        closed: { opacity: 0, transition: { duration: 0.3 } },
    }

    return (

        <AnimatePresence>
            <div
                className="fixed top-3 right-5 w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-500 cursor-pointer"
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

                    className="flex flex-col p-2 fixed top-12 [right:68px] text-white bg-neutral-900 z-10 rounded-lg ring-2 ring-zinc-500 w-fit gap-2"
                >
                    <motion.span
                        whileHover={() => { setMoreTypes(true) }}
                        onHoverEnd={() => { setMoreTypes(false) }}
                        className="border-none text-left hover:bg-zinc-500 hover:bg-opacity-30 rounded-md px-1 transition-colors"
                    >
                        Export Pallette
                        <motion.ul
                            initial={{ opacity: 0, width: 0, height: 0 }}
                            animate={{
                                height: moreTipes ? "90px" : 0,
                                width: moreTipes ? 150 : 0,
                                opacity: moreTipes ? 1 : 0,
                                transition: { delay: 0.2, duration: 0.3, type: "tween", ease: "easeOut" }
                            }}
                            className="flex flex-col p-2 top-[10px] right-[150px] text-white w-fit gap-1 absolute bg-neutral-900 rounded-lg ring-2 ring-zinc-500"
                        >
                            <motion.li
                                initial={{ opacity: 0 }}
                                variants={variants}
                                animate={moreTipes ? "open" : "closed"}
                                className="border-none text-left  hover:bg-zinc-500 hover:bg-opacity-30 rounded-md px-1 transition-colors"
                            >
                                <button
                                    onClick={exportPalletteAsJSON}
                                >As JSON</button>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0 }}
                                variants={variants}
                                animate={moreTipes ? "open" : "closed"}
                                className="border-none text-left  hover:bg-zinc-500 hover:bg-opacity-30 rounded-md px-1 transition-colors"
                            >
                                <button
                                    onClick={exportPalletteAsTailwind}
                                >Tailwind CSS</button>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0 }}
                                variants={variants}
                                animate={moreTipes ? "open" : "closed"}
                                className="border-none text-left  hover:bg-zinc-500 hover:bg-opacity-30 rounded-md px-1 transition-colors"
                            >
                                <button
                                    onClick={exportPalletteAsCSS}
                                >As CSS</button>
                            </motion.li>
                        </motion.ul>
                    </motion.span>
                    <button
                        className="border-none text-left  hover:bg-zinc-500 hover:bg-opacity-30 rounded-md px-1 transition-colors"

                    >
                        Save Pallette
                    </button>
                    <Link
                        onClick={() => setPallettes(JSON.parse(window.localStorage.getItem("palletteObject")))}
                        to="/user"
                        className=" hover:bg-zinc-500 hover:bg-opacity-30 rounded-md px-1 transition-colors "
                    >
                        User Info
                    </Link>
                    {isLoggedIn ?
                        <button
                            key={"logout"}
                            onClick={logout}
                            className="text-red-500 bg-red-500 bg-opacity-30 rounded-md p-0.5 hover:text-red-100 hover:bg-opacity-70 transition-colors"
                        >
                            Logout</button>
                        :
                        <div className="flex gap-2 pt-2 border-t border-zinc-500">
                            <button
                                className="text-green-500 bg-green-500 bg-opacity-30 rounded-md p-0.5 w-fit px-2 hover:text-green-100 hover:bg-opacity-70 transition-colors flex items-center"
                                key={"login"}
                                onClick={login}
                            >
                                Login
                            </button>
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