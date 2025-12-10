'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const router = useRouter();
    React.useEffect(() => {
        const adminData = localStorage.getItem('user');

        if (adminData) {
            const user = JSON.parse(adminData);
            // Delay navigation until after render
            setTimeout(() => router.push('/dp'), 0);
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "You Must Login First",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                router.push('/login');
            });
        }
    }, [router]);

    // handleLogout button 
    const handleLogout = () => {
        localStorage.removeItem('user');
        Swal.fire({
            position: "center",
            icon: "success",
            title: "LogOut Successfully",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            router.push('/login');
        });
    };


    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            bgcolor: '#212121',   // <-- background color here
                            color: '#fff',        // optional: make text visible on dark background
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#212121',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

            >
                <MenuItem className='hover:bg-gray-500'>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem className='hover:bg-gray-500'>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem className='hover:bg-gray-500'>
                    <ListItemIcon className='text-white'>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem className='hover:bg-gray-500'>
                    <ListItemIcon className='text-white'>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem className='hover:bg-gray-500' onClick={handleLogout}>
                    <ListItemIcon className='text-white'>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>

            </Menu>
        </React.Fragment>
    );
}
