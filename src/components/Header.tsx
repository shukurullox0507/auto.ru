'use client'
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Button,
    MenuItem,
    Menu
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguagePopover from './LanguagePopover';

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const { t } = useTranslation()

    const open = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleHover = (isHovering: boolean) => () => {
        setIsHovering(isHovering);
    };

    const handleMenuHover = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };



    return (
        <div className='header'>
            <AppBar
                position="static"
                style={{
                    width: '100%',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >
                <Toolbar
                    style={{
                        width: '90%',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onMouseEnter={(event) => {
                            toggleHover(true);
                            handleMenuHover(event);
                        }}
                        onMouseLeave={toggleHover(false)}
                    >
                        {isHovering
                            ? <CloseIcon style={{ color: '#DB3727FF', fontSize: 30 }} /> : <MenuIcon style={{ color: '#DB3727FF', fontSize: 30 }} />}
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}

                        open={open}
                        onClose={handleMenuClose}
                        onMouseLeave={handleMenuClose}
                    >
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>My account</MenuItem>
                    </Menu>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexGrow: 1,
                            marginLeft: '14px'
                        }}
                    >
                        <h1
                            style={{
                                margin: 0,
                                fontSize: '25px',
                                fontWeight: 'bolder',
                                color: '#DB3727FF',
                                marginRight: '1rem'
                            }}
                        >
                            auto.ru
                        </h1>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '300px',
                                position: 'relative',
                                backgroundColor: '#F0F1F3FF',
                                padding: '5px',
                                borderRadius: '10px'
                            }}
                        >
                            <div style={{ left: '8px' }}>
                                <SearchIcon style={{ color: "#787879FF" }} />
                            </div>
                            <InputBase
                                placeholder={t('searchBox')}
                                fullWidth
                                style={{ color: "#787879FF" }} />
                        </div>
                    </div>
                    <div
                        className='icon-div'
                        style={{
                            width: '35%',
                            display: 'flex',
                            color: 'black',
                            margin: '0, 20px',
                            justifyContent: 'space-around'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <FavoriteBorderIcon style={{ fontSize: '25px', fontWeight: 'bolder' }} />
                            <p style={{ fontSize: '14px' }}>{t('favorites')}</p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <SearchIcon style={{ fontSize: '25px', fontWeight: 'bolder' }} />
                            <p style={{ fontSize: '14px' }}>{t('search')}</p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <DirectionsCarIcon style={{ fontSize: '25px', fontWeight: 'bolder' }} />
                            <p style={{ fontSize: '14px' }}>{t('comparisons')}</p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <MapsUgcRoundedIcon style={{ fontSize: '25px', fontWeight: 'bolder' }} />
                            <p style={{ fontSize: '14px' }}>{t('message')}</p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <DirectionsCarIcon style={{ fontSize: '25px', fontWeight: 'bolder' }} />
                            <p style={{ fontSize: '14px' }}>{t('sell')}</p>
                        </div>
                    </div>
                    <div>
                        <Button
                            style={{
                                backgroundColor: '#EFEFF3FF',
                                color: 'black',
                                marginRight: '10px',
                                borderRadius: '9px'
                            }}>
                            {t('login')}
                        </Button>
                        <Button
                            style={{
                                backgroundColor: '#36B555FF',
                                color: 'white',
                                marginRight: '30px',
                                borderRadius: '9px'
                            }}>
                            {t('post')}
                        </Button>
                        <LanguagePopover />
                    </div>
                </Toolbar>
                <Toolbar
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        background: 'red'
                    }}>
                    <div
                        style={{
                            width: '90%',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            background: 'red'
                        }}>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('cars')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('commercial')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('electro')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('chinese')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('moto')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('reports')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('ransom')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('loans')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('carValuation')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('insurance')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('garage')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('magazine')}
                        </Link>
                        <Link href="" style={{ cursor: 'pointer' }}>
                            {t('forBusiness')}
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
