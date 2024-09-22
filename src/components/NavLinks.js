import React, { useState } from 'react';
import {
  Button,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function NavLinks({ isMobile = false, handleCloseNavMenu }) {
  const { t } = useTranslation();

  const links = [
    { text: t('home'), href: '/' },
    {
      text: t('docs'),
      href: '/docs',
      submenu: [
        { text: t('custom-button'), href: '/docs/custom-button' },
        { text: t('custom-content'), href: '/docs/custom-content' },
        { text: t('footer'), href: '/docs/footer' },
        { text: t('footer-links'), href: '/docs/footer-links' },
        { text: t('full-width-content'), href: '/docs/full-width-content' },
        { text: t('navbar'), href: '/docs/navbar' },
        { text: t('nav-links'), href: '/docs/nav-links' }
      ],
    },
  ];

  // État pour le menu en mode desktop
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleOpenMenu = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

  // État pour les sous-menus en mode mobile
  const [mobileOpenIndexes, setMobileOpenIndexes] = useState({});

  const handleMobileToggle = (index) => {
    setMobileOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (isMobile) {
    return (
      <List component="nav">
        {links.map((link, index) => (
          <div key={link.text}>
            <ListItem
              button
              onClick={() => {
                if (link.submenu) {
                  handleMobileToggle(index);
                } else {
                  handleCloseNavMenu();
                  window.location.href = link.href;
                }
              }}
            >
              <ListItemText primary={link.text} />
              {link.submenu ? (
                mobileOpenIndexes[index] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
            {link.submenu && (
              <Collapse in={mobileOpenIndexes[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {link.submenu.map((sublink) => (
                    <ListItem
                      button
                      key={sublink.text}
                      sx={{ pl: 4 }}
                      onClick={() => {
                        handleCloseNavMenu();
                        window.location.href = sublink.href;
                      }}
                    >
                      <ListItemText primary={sublink.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    );
  } else {
    return (
      <div style={{ display: 'flex', height: '100%' }}>
        {links.map((link, index) => (
          <div key={link.text}>
            {link.submenu ? (
              <>
                <Button
                  color="inherit"
                  onClick={(e) => handleOpenMenu(e, index)}
                  sx={{
                    height: '100%',
                    borderRadius: 0,
                    borderBottom: '4px solid transparent',
                    '&:hover': {
                      borderBottom: '4px solid currentColor',
                    },
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {link.text}
                  <ExpandMore sx={{ ml: 0.5 }} />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={openMenuIndex === index}
                  onClose={handleCloseMenu}
                  disableScrollLock={true}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {link.submenu.map((sublink) => (
                    <MenuItem
                      key={sublink.text}
                      component="a"
                      href={sublink.href}
                      onClick={handleCloseMenu}
                    >
                      {sublink.text}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                color="inherit"
                href={link.href}
                sx={{
                  height: '100%',
                  borderRadius: 0,
                  borderBottom: '4px solid transparent',
                  '&:hover': {
                    borderBottom: '4px solid currentColor',
                  },
                }}
              >
                {link.text}
              </Button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default NavLinks;
