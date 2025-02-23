'use client';
import './style.css' ;
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import { useEffect } from 'react';
import Link from 'next/link';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    marginLeft: 0,
                }, 
            },
        ],
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const AdminPanelLayout = ({ children }) => {

    const router = useRouter();
    useEffect(() => {
        const adminData = localStorage.getItem('user');

        if (adminData) {
            const user = JSON.parse(adminData);
            if (nextauth.message) {
                router.push('/dp');
            }
        } else {
            //  Toast message -----------------------------
            Swal.fire({
                position: "center",
                icon: "error",
                title: "You Must Login First",
                showConfirmButton: false,
                timer: 1500
            });
            router.push('/login');
        }

    }, [router])
    // handleLogout button 
    const handleLogout = () => {
        localStorage.removeItem('user') ;
          //  Toast message -----------------------------
          Swal.fire({
            position: "center",
            icon: "success",
            title: "LogOut Successfully",
            showConfirmButton: false,
            timer: 1500
        });
        router.push('/login');
    }

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', backgroundColor: "black" }}>
            <CssBaseline />
            <AppBar sx={{backgroundColor : '#A64D79' }} position="fixed" open={open}>
                <Toolbar sx={{ width: "100% ", display: 'flex', justifyContent: 'space-between', alignItems:"center"}}>
                    <div className='flex items-center'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                    </div>
                    <div>
                    <Typography
                    onClick={handleLogout}
                     className='bg-black hover:bg-[#6A1E55] px-3 py-2 rounded-md uppercase font-semibold' 
                     variant="h7" noWrap component="div" >
                   Logout
                    </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link href="/">
                        <ListItem key={"Home"} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                     <ViewCarouselIcon /> 
                                </ListItemIcon>
                                <ListItemText>Home</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link href="/dp">
                        <ListItem key={"Dashboard"} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                     <ViewCarouselIcon /> 
                                </ListItemIcon>
                                <ListItemText>Dashboard</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link href="/dp/allToys">
                        <ListItem key={"All Toys"} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                     <ViewCarouselIcon /> 
                                </ListItemIcon>
                                <ListItemText>All Toys</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link href="/dp/addToys">
                        <ListItem key={"Add Toys"} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                     <ViewCarouselIcon /> 
                                </ListItemIcon>
                                <ListItemText>Add Toys</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </Drawer>
            <Main open={open}  sx={{ backgroundColor: "black" }}>
                <div >
                    <>
                        <DrawerHeader />
                        {children}
                    </>
                </div>
            </Main>
        </Box>
    );
};

export default AdminPanelLayout;