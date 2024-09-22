import React from 'react';
import FooterLinks from '../../components/FooterLinks';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FooterLinksDocs = () => {
  const exampleLinks = [
    { text: 'Accueil', href: '/' },
    { text: 'Fonctionnalités', href: '/features' },
    { text: 'Documentation', href: '/docs' },
  ];

  const theme = useTheme();
  return (
    <Box sx={{ padding: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
     }}>
      <Typography variant="h4" gutterBottom>
        FooterLinks
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        Le composant <code>FooterLinks</code> affiche une liste de liens dans le pied de page, organisée sous un titre spécifique.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Propriétés (Props)
      </Typography>
      
      <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
        <Typography component="li">
          <code>title</code> (string): Le titre de la section de liens.
        </Typography>
        <Typography component="li">
          <code>links</code> (array): Tableau d'objets contenant les propriétés <code>text</code> et <code>href</code> pour chaque lien.
        </Typography>
      </Box>
      
      <Typography variant="h6" gutterBottom>
        Exemple d'utilisation
      </Typography>
      
      <Box sx={{ marginBottom: 4 }}>
        <FooterLinks title="Liens Utiles" links={exampleLinks} />
      </Box>
      
      <Typography variant="body2" color="text.secondary">
        <strong>Remarque :</strong> Vous pouvez personnaliser la liste des liens en passant un tableau différent à la propriété <code>links</code>.
      </Typography>
    </Box>
  );
};

export default FooterLinksDocs;
