import Drawer from '@mui/joy/Drawer'
import { useState } from 'react'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemButton from '@mui/joy/ListItemButton'

import './NavBarMobile.css'

export default function NavBarMobile() {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <button onClick={() => setToggle(true)}>Hello there</button>
            <Drawer open={toggle} onClose={() => setToggle(false)} size='sm'>
                <List>
                    <ListItem>
                        <ListItemButton>Home</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>My Library</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>Roadmap</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>Forum</ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
        
    )
}
