import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  useTheme,
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const drawerWidth = 240;

function DocumentPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();

  const docs = [
    { name: 'custom-button', label: t('custom-button'), path: 'custom-button' },
    { name: 'custom-content', label: t('custom-content'), path: 'custom-content' },
    { name: 'footer', label: t('footer'), path: 'footer' },
    { name: 'footer-links', label: t('footer-links'), path: 'footer-links' },
    { name: 'full-width-content', label: t('full-width-content'), path: 'full-width-content' },
    { name: 'navbar', label: t('navbar'), path: 'navbar' },
    { name: 'nav-links', label: t('nav-links'), path: 'nav-links' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar Fixe */}
      <Navbar showLanguageSelector={true} showThemeSwitch={true} />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: 'none', sm: 'block' }, // Masquer sur les écrans xs (mobile)
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'fixed',
            top: theme.mixins.toolbar.minHeight,
            height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
            paddingTop: theme.spacing(2),
            zIndex: theme.zIndex.appBar - 1,
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        <Box sx={{ paddingTop: theme.spacing(2) }}>
          <List>
            {docs.map((doc) => (
              <ListItem
                button
                key={doc.name}
                component={Link}
                to={`/docs/${doc.path}`}
                selected={location.pathname === `/docs/${doc.path}`}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: 'transparent',
                  },
                  '&:hover .MuiListItemText-primary': {
                    textDecoration: 'underline', 
                  },
                  '& .MuiListItemText-primary': {
                    color: theme.palette.mode === 'dark' ? 'common.white' : 'grey.700',
                  },
                  '& .MuiListItemIcon-root': {
                    color: theme.palette.mode === 'dark' ? 'common.white' : 'grey.700',
                  },
                }}
              >
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary={doc.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Zone de contenu */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 1,
          marginLeft: { sm: `${drawerWidth}px` },
        }}
      >

        {/* InfoBar Non Fixée */}
        <Box
          sx={{
            backgroundColor: theme.palette.mode === 'dark' ? 'primary.dark' : 'grey.200',
            padding: theme.spacing(1),
            mb: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body1"
            color={theme.palette.mode === 'dark' ? 'common.white' : 'grey.700'}
          >
            {t('documentation_language_notice')}
          </Typography>
        </Box>

        {/* Contenu Principal */}
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default DocumentPage;
