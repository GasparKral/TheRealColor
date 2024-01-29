import { Routes, Route } from 'react-router-dom'
import { UserDisplay } from './Component/User/UserDisplay'
import { LogIn } from './Component/User/LogIn'
import { useContext } from 'react'
import { GeneralContext } from './hooks/Context'

import Home from './pages/Home'
import UserInfo from './pages/UserInfo'
import Register from './pages/Register'

function App() {

    const { showLogIn } = useContext(GeneralContext)

    return (
        <>
            <UserDisplay />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<UserInfo />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            {showLogIn && <LogIn />}
        </>
    )
}

export default App
