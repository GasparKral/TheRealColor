import { useContext } from "react"
import { PalletteBox } from "../Component/PalletteComponents/PalletteBox"
import { Toast } from "../Component/Toast"
import { GeneralContext } from "../hooks/Context"
import { AddNewPallette } from "../Component/PalletteComponents/AddNewPallette"

const Home = () => {
    const { task, pallettes, setPallettes, newPallette, generateRandomColor } = useContext(GeneralContext)

    const handleResetPallettes = () => {
        window.localStorage.clear()
        history.replaceState(null, null, "/")
        setPallettes([])
    }

    return (
        <main
            className="min-h-screen bg-neutral-900 w-screen flex flex-col gap-8 items-center justify-center text-white overflow-y-scroll py-16"
        >
            <button
                className="fixed top-4 left-4 text-sm bg-neutral-500 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl p-2"
                onClick={handleResetPallettes}
            >
                Reset Pallettes
            </button>

            {pallettes.map((pallette, index) => (
                <PalletteBox
                    key={index}
                    index={index}
                    initialStates={pallette}
                />
            ))}

            {task.isTaskOpen && <Toast>{task.task}</Toast>}

            {pallettes.length < 5 &&
                <AddNewPallette updateNumber={() => newPallette({ color: generateRandomColor(), hue: 9, saturation: 5, lightness: 5, numberOfColors: 5 })} />
            }

        </main>
    )
}

export default Home