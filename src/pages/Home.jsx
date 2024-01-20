import { PalletteBox } from "../Component/PalletteComponents/PalletteBox"
import { Task } from "../Component/Toast"
import { TaskContext } from "../hooks/Context"
import { useContext, useState } from "react"
import { AddNewPallette } from "../Component/PalletteComponents/AddNewPallette"

const Home = () => {

    const { task } = useContext(TaskContext)
    const [numberOfPallettes, setNumberOfPallettes] = useState(1)

    return (
        <main
            className="bg-zinc-900 min-h-screen w-screen flex flex-col gap-8 items-center justify-center text-white overflow-y-scroll py-16"
        >
            {Array(numberOfPallettes).fill("_").map((_, i) => <PalletteBox key={i} />)}

            {task.isTaskOpen && <Task>
                {task.task}
            </Task>}
            {numberOfPallettes <= 5 && <AddNewPallette updateNumber={() => setNumberOfPallettes(numberOfPallettes + 1)} />}
        </main>
    )
}

export default Home