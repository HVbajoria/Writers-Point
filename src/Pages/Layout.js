import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Dashboard from "../components/Dashboard"
import WriteupPage from "./WriteupPage";
const Layout = () => {
    return (
        <div className="flex flex-row">
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/writeup/:id' element={<WriteupPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Layout