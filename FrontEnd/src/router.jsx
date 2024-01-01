
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./views/Login";

const router = (
    <Router>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            {/* Add more routes as needed */}
        </Routes>
    </Router>
);

export default router;
