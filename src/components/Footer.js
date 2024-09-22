import React from 'react';
import { Typography, Container, Box, Grid2 } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FooterLinks from './FooterLinks';
import { useTranslation } from 'react-i18next';

function Footer() {
  const theme = useTheme();
  const { t } = useTranslation();

  const usefulLinks = [
    { text: t('docs'), href: '/docs' },
  ];

  const socialLinks = [
    { text: t('github'), href: 'https://github.com/GaburaisuVGC' },
    { text: t('linkedin'), href: 'https://www.linkedin.com/in/mattbrbe/' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        pt: 4,
        pb: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('company')}
            </Typography>
            <Typography variant="body2">
              {t('company_description')}
            </Typography>
          </Grid2>

          <Grid2 xs={12} md={4}>
            <FooterLinks title={t('useful_links')} links={usefulLinks} />
          </Grid2>

          <Grid2 xs={12} md={4}>
            <FooterLinks title={t('follow_us')} links={socialLinks} />
          </Grid2>
        </Grid2>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ mt: 4 }}
        >
          {t('admin')} {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
