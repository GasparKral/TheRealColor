import { createContext, useState } from "react";
import { generateRandomColor } from "../hooks/logic/generateRandomColor"
import { useEffect } from "react"

export const GeneralContext = createContext()

export const GeneralProvider = ({ children }) => {
    const initialPallette = { color: generateRandomColor(), hue: 9, saturation: 5, lightness: 5, numberOfColors: 5 }

    const [task, setTask] = useState({ isTaskOpen: false, task: '' })
    const [showLogIn, setShowLogIn] = useState(undefined)
    const [user, setUser] = useState(undefined)
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") ? JSON.parse(localStorage.getItem("loggedIn")) : false)
    const [pallettes, setPallettes] = useState([initialPallette])
    const [savedPallettes, setSavedPallettes] = useState([])

    const newPallette = (pallette) => setPallettes([...pallettes, pallette])
    const eliminatePallettes = (newPallettes) => setPallettes(newPallettes)

    useEffect(() => {

        if (isLoggedIn) {
            fetch(`http://localhost:3000/getUser${localStorage.getItem("user").replaceAll(`"`, "")}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => { const data = res.json(); return data })
                .then((data) => {
                    setUser(data)
                })
        }

    }, [])

    useEffect(() => {
        if (location.pathname.slice(2)) {
            setPallettes(JSON.parse(atob(location.pathname.slice(2))))
        } else {
            setPallettes(JSON.parse(window.localStorage.getItem("palletteObject")))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem("palletteObject", JSON.stringify(pallettes))
    }, [pallettes.length])

    return (
        <GeneralContext.Provider
            value={{
                task,
                initialPallette,
                pallettes,
                showLogIn,
                isLoggedIn,
                savedPallettes,
                user,
                setUser,
                setTask,
                newPallette,
                setPallettes,
                eliminatePallettes,
                generateRandomColor,
                setShowLogIn,
                setIsLoggedIn,
                setSavedPallettes
            }}
        >
            {children}
        </GeneralContext.Provider>
    )
}