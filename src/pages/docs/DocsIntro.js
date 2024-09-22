// src/pages/docs/DocsIntro.js
import React from 'react';
import { Grid2, Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description'; // Exemple d'icône, ajustez selon vos besoins

const documentationLinks = [
  { title: 'custom-button', path: '/docs/custom-button', icon: <DescriptionIcon /> },
  { title: 'custom-content', path: '/docs/custom-content', icon: <DescriptionIcon /> },
  { title: 'footer', path: '/docs/footer', icon: <DescriptionIcon /> },
  { title: 'footer-links', path: '/docs/footer-links', icon: <DescriptionIcon /> },
  { title: 'full-width-content', path: '/docs/full-width-content', icon: <DescriptionIcon /> },
  { title: 'navbar', path: '/docs/navbar', icon: <DescriptionIcon /> },
  { title: 'nav-links', path: '/docs/nav-links', icon: <DescriptionIcon /> },
  // Ajoutez d'autres liens de documentation ici
];

const DocsIntro = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: 4, backgroundColor: 'background.default', color: 'text.primary' }}>
      {/* Titre Principal */}
      <Typography variant="h4" gutterBottom align="center">
        {t('documentation_intro_title')}
      </Typography>

      {/* Description Introductive */}
      <Typography variant="body1" gutterBottom align="center">
        {t('documentation_intro_description')}
      </Typography>

      {/* Grille de Pilules */}
      <Grid2 container spacing={2} sx={{ marginTop: 4 }}>
        {documentationLinks.map((link, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Button
              component={RouterLink}
              to={link.path}
              variant="outlined"
              color="primary"
              fullWidth
              startIcon={link.icon}
              sx={{
                borderRadius: '50px',
                height: '60px',
                textTransform: 'none',
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'common.white',
                },
              }}
            >
              {t(link.title)}
            </Button>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default DocsIntro;
