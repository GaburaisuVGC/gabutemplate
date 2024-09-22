import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavbarDocs = () => {
    const theme = useTheme();
  return (
    <Box sx={{ padding: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
     }}>
      <Typography variant="h4" gutterBottom>
        Navbar
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        Le composant <code>Navbar</code> est la barre de navigation principale de votre site. Elle inclut des liens de navigation, un sélecteur de langue, et un interrupteur pour le mode clair/sombre.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Propriétés (Props)
      </Typography>
      
      <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
        <Typography component="li">
          <code>showLanguageSelector</code> (boolean): Affiche ou masque le sélecteur de langue.
        </Typography>
        <Typography component="li">
          <code>showThemeSwitch</code> (boolean): Affiche ou masque l'interrupteur de mode clair/sombre.
        </Typography>
      </Box>
      
      <Typography variant="body2" color="text.secondary">
        <strong>Remarque :</strong> Assurez-vous que le contexte <code>ColorModeContext</code> est correctement configuré dans votre application pour que l'interrupteur de thème fonctionne correctement.
      </Typography>
    </Box>
  );
};

export default NavbarDocs;
