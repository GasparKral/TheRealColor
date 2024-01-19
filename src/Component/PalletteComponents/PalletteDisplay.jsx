import { useContext } from "react"
import { ReducerContext } from "../../hooks/Context"
export const PalletteDisplay = () => {

    const { state } = useContext(ReducerContext)

    return (
        <div>
            {state.numberOfColors}
        </div>
    )

}