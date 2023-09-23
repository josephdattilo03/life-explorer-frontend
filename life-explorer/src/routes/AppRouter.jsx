
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import MyLibrary from '../components/MyLibrary'
import MyRoadmap from '../components/MyRoadmap'
import DiscussionPage from '../components/DiscussionPage'
import AboutMe from '../components/AboutMe'
import UserSettings from '../components/UserSettings'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/" element={<MyLibrary></MyLibrary>} />
                <Route path="/" element={<MyRoadmap></MyRoadmap>} />
                <Route path="/" element={<DiscussionPage></DiscussionPage>} />
                <Route path="/" element={<AboutMe></AboutMe>} />
                <Route path="/" element={<UserSettings></UserSettings>} />
            </Routes>
        </BrowserRouter>
    )
}
