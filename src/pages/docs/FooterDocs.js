// docs/FooterDocs.js
import React from 'react';
import Footer from '../../components/Footer';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FooterDocs = () => {
  const theme = useTheme();
  return (
    <Box sx={{ padding: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
     }}>
      <Typography variant="h4" gutterBottom>
        Footer
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        Le composant <code>Footer</code> affiche le pied de page de votre site, incluant des liens utiles, des liens vers les réseaux sociaux, et une description de l'entreprise.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Propriétés (Props)
      </Typography>
      
      <Typography variant="body2" gutterBottom>
        <strong>Note :</strong> Ce composant ne prend actuellement pas de propriétés personnalisées. Tous les contenus sont gérés via des données internes et la traduction.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Exemple d'utilisation
      </Typography>
      
      <Box sx={{ marginBottom: 4, backgroundColor: '#f5f5f5', padding: 2 }}>
        <Footer />
      </Box>
      
      <Typography variant="body2" color="text.secondary">
        <strong>Remarque :</strong> Assurez-vous que les traductions pour les clés utilisées (comme <code>'features'</code>, <code>'docs'</code>, etc.) sont définies dans vos fichiers de traduction pour un affichage correct.
      </Typography>
    </Box>
  );
};

export default FooterDocs;
