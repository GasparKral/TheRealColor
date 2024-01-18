import { Routes, Route } from 'react-router-dom'
import { UserDisplay } from './Component/UserDisplay'

import Home from './pages/Home'

function App() {

    return (
        <>
            <UserDisplay />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<h1>User Info</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
            </Routes>
        </>
    )
}

export default App
