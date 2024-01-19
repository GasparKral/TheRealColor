import { Routes, Route } from 'react-router-dom'
import { UserDisplay } from './Component/UserDisplay'

import Home from './pages/Home'
import About from './pages/About'
import UserInfo from './pages/UserInfo'
import LogIn from './pages/LogIn'

function App() {

    return (
        <>
            <UserDisplay />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<UserInfo />} />
                <Route path="/about" element={<About />} />
                <Route path='/login' element={<LogIn />} />
            </Routes>
        </>
    )
}

export default App
