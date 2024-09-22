// Home.js
import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '@mui/material/styles';
import CustomContent from '../components/CustomContent';
import FullWidthContent from '../components/FullWidthContent';

function Home() {
  const theme = useTheme();

  return (
    <>
      <Navbar showLanguageSelector={true} showThemeSwitch={true} />
      <Box
        className="content"
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          flex: 1,
          minHeight: 'calc(100vh - 64px - 64px)',
          overflowX: 'hidden',
        }}
      >
        {/* Premier FullWidthContent */}
        <FullWidthContent
          title="home_title"
          content="home_description"
          focusWordKeys={['template', 'development']}
          focusColor="primary.main"
          contentAlignment="center"
          ctaText="learn_more"
          ctaLink="/docs"
          marginTopNonMobile={20}
        />

        {/* Présentation des fonctionnalités */}
        <Box my={24}>
          <Container maxWidth="md">
            {/* Fonctionnalité : Boutons CTA */}
            <Box my={12}>
              <CustomContent
                title="feature_cta_title"
                content="feature_cta_description"
                image="/images/cta.png"
                imagePosition="left"
                animationDirection="left"
                ctaText="view_documentation"
                ctaLink="/docs/custom-button"
                ctaPosition="right"
                ctaStyles={{}}
                contentAlignment="center"
              />
            </Box>

            {/* Fonctionnalité : Images */}
            <Box my={12}>
              <CustomContent
                title="feature_images_title"
                content="feature_images_description"
                image="/images/images.png"
                imagePosition="right"
                animationDirection="right"
                ctaText="view_documentation"
                ctaLink="/docs/custom-content"
                ctaPosition="left"
                ctaStyles={{}}
                contentAlignment="center"
              />
            </Box>

            {/* Fonctionnalité : Listes à puces */}
            <Box my={12}>
              <CustomContent
                title="feature_bullets_title"
                content="feature_bullets_description"
                listItems={['bullet_point_one', 'bullet_point_two', 'bullet_point_three']}
                listType="bullet"
                animationDirection="left"
                ctaText="view_documentation"
                ctaLink="/docs/custom-content"
                ctaPosition="center"
                ctaStyles={{}}
                contentAlignment="center"
              />
            </Box>

            {/* Fonctionnalité : Cases à cocher */}
            <Box my={12}>
              <CustomContent
                title="feature_checkboxes_title"
                content="feature_checkboxes_description"
                listItems={[
                  { text: 'checkbox_item_one', state: 'checked' },
                  { text: 'checkbox_item_two', state: 'unchecked' },
                  { text: 'checkbox_item_three', state: 'crossed' },
                ]}
                listType="checkbox"
                animationDirection="right"
                ctaText="view_documentation"
                ctaLink="/docs/custom-content"
                ctaPosition="center"
                ctaStyles={{}}
                contentAlignment="center"
              />
            </Box>

            {/* Fonctionnalité : Animations */}
            <Box my={12}>
              <CustomContent
                title="feature_animations_title"
                content="feature_animations_description"
                animationDirection="up"
                ctaText="view_documentation"
                ctaLink="/docs/custom-content"
                ctaPosition="center"
                ctaStyles={{}}
                contentAlignment="center"
              />
            </Box>

            {/* Toutes les fonctionnalités */}
            <Box my={16}>
              <CustomContent
                title="all_features_title"
                content="all_features_description"
                ctaText="view_all_features"
                ctaLink="/docs"
                ctaPosition="center"
                ctaStyles={{}}
                spacing={4}
                borderRadius={4}
                boxShadow={3}
                animationDirection="up"
                contentAlignment="center"
              />
            </Box>
          </Container>
        </Box>

        {/* Dernier FullWidthContent */}
        <FullWidthContent
          title="github_cta_title"
          content="github_cta_description"
          contentAlignment="center"
          ctaText="visit_github"
          ctaLink="https://github.com/GaburaisuVGC/gabutemplate"
          backgroundImage="/images/blurred_image.png"
          titleColor="white"
          contentColor="white"
          focusWordKeys={['GitHub']}
        />
      </Box>
      <Footer />
    </>
  );
}

export default Home;
