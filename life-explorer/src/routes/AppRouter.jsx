import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import MyLibrary from '../components/MyLibrary'
import MyRoadmap from '../components/MyRoadmap'
import DiscussionPage from '../components/DiscussionPage'
import AboutMe from '../components/AboutMe'
import UserSettings from '../components/UserSettings'
import NavBar from "../components/common/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppRouter() {
    return (
        <BrowserRouter>
        <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/library" element={<MyLibrary></MyLibrary>} />
                <Route path="/roadmap" element={<MyRoadmap></MyRoadmap>} />
                <Route path="/discussion" element={<DiscussionPage></DiscussionPage>} />
                <Route path="/bio" element={<AboutMe></AboutMe>} />
                <Route path="/settings" element={<UserSettings></UserSettings>} />
            </Routes>
        </BrowserRouter>
    )
}
