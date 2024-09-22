// docs/NavLinksDocs.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const NavLinksDocs = () => {
    const theme = useTheme();
  return (
    <Box sx={{ padding: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
     }}>
      <Typography variant="h4" gutterBottom>
        NavLinks
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        Le composant <code>NavLinks</code> gère les liens de navigation dans la barre de navigation. Il prend en charge les sous-menus et s'adapte aux écrans mobiles.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Propriétés (Props)
      </Typography>
      
      <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
        <Typography component="li">
          <code>isMobile</code> (boolean): Indique si le rendu est pour un écran mobile.
        </Typography>
        <Typography component="li">
          <code>handleCloseNavMenu</code> (function): Fonction de rappel pour fermer le menu de navigation sur mobile.
        </Typography>
      </Box>
      
      <Typography variant="body2" color="text.secondary">
        <strong>Remarque :</strong> Les sous-menus sont gérés de manière interactive. En mode mobile, cliquez sur un lien avec un sous-menu pour l'étendre ou le réduire.
      </Typography>
    </Box>
  );
};

export default NavLinksDocs;
