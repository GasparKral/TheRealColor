import { Routes, Route } from 'react-router-dom'
import { UserDisplay } from './Component/UserDisplay'

import Home from './pages/Home'
import UserInfo from './pages/UserInfo'

function App() {

    return (
        <>
            <UserDisplay />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<UserInfo />} />
            </Routes>
        </>
    )
}

export default App
