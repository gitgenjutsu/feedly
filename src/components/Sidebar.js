import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ScienceIcon from '@mui/icons-material/Science';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Fab from '@mui/material/Fab';
import ColorLensIcon from '@mui/icons-material/ColorLens';
function Sidebar() {
    return (
        <div className="sideBar">
            <div className="darkMode">
                <Fab variant="extended" size="small" className="icon" color="dark" aria-label="add">
                    <ColorLensIcon sx={{ mr: 1 }} />
                    Light Mode
                </Fab>
            </div>
            <nav className="sideNav">
                <ul>
                    <li><SettingsIcon/> General</li>
                    <li><LocalAtmIcon/> Business</li>
                    <li><SportsEsportsIcon/> Sports</li>
                    <li><HealthAndSafetyIcon/> Health</li>
                    <li><ScienceIcon/> Science</li>
                </ul>
           </nav>
        </div>
    )
}

export default Sidebar
