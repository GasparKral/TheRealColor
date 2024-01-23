import { PalletteBox } from "../Component/PalletteComponents/PalletteBox"
import { Task } from "../Component/Toast"
import { GeneralContext } from "../hooks/Context"
import { AddNewPallette } from "../Component/PalletteComponents/AddNewPallette"
import { useContext } from "react"

const Home = () => {

    const { task, pallettes, newPallette, generateRandomColor } = useContext(GeneralContext)

    const handleClick = () => {
        window.localStorage.clear()
        location.reload()
    }

    return (
        <main
            className="bg-zinc-900 min-h-screen w-screen flex flex-col gap-8 items-center justify-center text-white overflow-y-scroll py-16"
        >
            <button
                className="fixed top-4 left-4 text-sm bg-neutral-500 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl p-2"
                onClick={handleClick}
            >
                Reset Pallettes
            </button>

            {pallettes.map((pallette, index) => (
                <PalletteBox
                    key={index}
                    pallette={pallette}
                    index={index}
                    initialStates={pallette}
                />
            ))}

            {task.isTaskOpen && <Task>
                {task.task}
            </Task>}

            {pallettes.length < 5 &&
                <AddNewPallette updateNumber={() => newPallette({ color: generateRandomColor(), hue: 9, saturation: 5, lightness: 5, numberOfColors: 5 })} />}
        </main>
    )
}

export default Home