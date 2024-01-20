import { PalletteBox } from "../Component/PalletteComponents/PalletteBox"
import { Task } from "../Component/Toast"
import { TaskContext } from "../hooks/Context"
import { useContext } from "react"
const Home = () => {

    const { task } = useContext(TaskContext)

    return (
        <main
            className="bg-zinc-900 h-screen w-screen flex items-center justify-center text-white"
        >
            <PalletteBox />
            {task.isTaskOpen && <Task>
                {task.task}
            </Task>}
        </main>
    )
}

export default Home