import {Menu} from 'antd'
import { useState } from 'react';
import {HomeOutlined, ForkOutlined, UserOutlined, SettingOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import './NavBar.css'



const items = [
    {
        label: 'Home',
        key: '',
        icon: <HomeOutlined />,
    },
    {
        label: 'Roadmap',
        key: 'roadmap',
        icon: <ForkOutlined />,
    },
    {
        label: 'AboutMe',
        key: 'bio',
        icon: <UserOutlined />
    },
    {
        label: 'Settings',
        key: 'settings',
        icon: <SettingOutlined />
    }
];


export default function NavBar() {
    const navigate = useNavigate()
    const [tab, setTab] = useState('home')
    return (
        <Menu className='menu' onClick={(e) => {setTab(e.key); navigate(`/${e.key}`)}} items = {items} mode='horizontal'>
        </Menu>
    )
}
