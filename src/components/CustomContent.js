import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Circle, CheckBox, CheckBoxOutlineBlank, Close } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function CustomContent(props) {
  const {
    title,
    content,
    image,
    imagePosition = 'top',
    spacing = 2,
    borderRadius = 2,
    boxShadow = 1,
    animationDirection = null,
    animationDuration = 0.5,
    sx = {},
    ctaText = null,
    ctaLink = '#',
    ctaPosition = 'bottom',
    ctaStyles = {},
    onCtaClick = null,
    listItems = [],
    listType = 'bullet',
    bulletIcon = <Circle sx={{ fontSize: '0.5rem' }} />,
    contentAlignment = 'inherit',
    titleMarginTop = 1,
  } = props;

  const { t } = useTranslation();

  // Utilisation de useInView pour détecter la visibilité
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Définition des variantes d'animation en fonction de la direction
  const variants = animationDirection
    ? {
        hidden: {
          opacity: 0,
          x:
            animationDirection === 'left'
              ? -100
              : animationDirection === 'right'
              ? 100
              : 0,
          y:
            animationDirection === 'up'
              ? 100
              : animationDirection === 'down'
              ? -100
              : 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
        },
      }
    : {};

  // Si l'animation est désactivée, les props d'animation sont vides
  const animationProps = animationDirection
    ? {
        ref: ref,
        initial: 'hidden',
        animate: inView ? 'visible' : 'hidden',
        variants: variants,
        transition: { duration: animationDuration },
      }
    : {};

  // Styles par défaut pour le CTA
  const defaultCtaStyles = {
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    borderRadius: 2,
    border: 'none',
    '&:hover': {
      backgroundColor: 'primary.dark',
    },
    ...ctaStyles,
  };

  // Déterminer la direction flex en fonction de la position de l'image
  const flexDirection =
    imagePosition === 'left' || imagePosition === 'right'
      ? { xs: 'column', sm: 'row' }
      : 'column';

  // Traduire le titre, le contenu et le ctaText
  const translatedTitle = typeof title === 'string' ? t(title) : title;
  const translatedContent = typeof content === 'string' ? t(content) : content;
  const translatedCtaText = typeof ctaText === 'string' ? t(ctaText) : ctaText;

  // Traduire les éléments de la liste
  const translatedListItems = listItems.map((item) => {
    if (listType === 'checkbox') {
      return {
        ...item,
        text: typeof item.text === 'string' ? t(item.text) : item.text,
      };
    } else {
      return typeof item === 'string' ? t(item) : item;
    }
  });

  return (
    <Box
      component={animationDirection ? motion.div : 'div'}
      {...animationProps}
      sx={{
        p: spacing,
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: flexDirection,
        alignItems: 'stretch',
        ...sx,
      }}
    >
      {/* Image en haut ou à gauche */}
      {(imagePosition === 'top' || imagePosition === 'left') && image && (
        <Box
          component="img"
          src={image}
          alt={translatedTitle}
          sx={{
            width:
              imagePosition === 'left' || imagePosition === 'right'
                ? { xs: '100%', sm: '30%' } // Prend 100% de la largeur sur mobile
                : '100%',
            height: 'auto',
            mb: {
              xs: 2, // Marge en bas sur mobile
              sm: imagePosition === 'top' ? 2 : 0,
            },
            mt: {
              xs: 2, // Marge en haut sur mobile
              sm: imagePosition === 'bottom' ? 2 : 0,
            },
            mr: imagePosition === 'left' ? { xs: 0, sm: 2 } : 0,
            ml: imagePosition === 'right' ? { xs: 0, sm: 2 } : 0,
          }}
        />
      )}

      {/* Contenu textuel avec CTA */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Répartit l'espace entre le contenu principal et le CTA
          textAlign: {
            xs: 'center', // Centre le texte sur mobile
            sm: contentAlignment, // Utilise la prop contentAlignment sur sm et plus
          },
        }}
      >
        {/* Contenu principal */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Centre verticalement le contenu principal
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ mt: titleMarginTop }} // Utilise la nouvelle prop pour la marge supérieure
          >
            {translatedTitle}
          </Typography>
          <Typography>{translatedContent}</Typography>

          {/* Liste à puces ou cases à cocher */}
          {translatedListItems.length > 0 && (
            <Box
              sx={{
                pl: 2,
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                  xs: 'center',
                  sm:
                    contentAlignment === 'center'
                      ? 'center'
                      : contentAlignment === 'right'
                      ? 'flex-end'
                      : 'flex-start',
                },
              }}
            >
              {translatedListItems.map((item, index) => {
                let iconElement = null;
                if (listType === 'bullet') {
                  iconElement = <Box sx={{ mr: 1 }}>{bulletIcon}</Box>;
                } else if (listType === 'checkbox') {
                  const { text, state } = item;
                  let icon;
                  if (state === 'checked') {
                    icon = <CheckBox color="success" />;
                  } else if (state === 'unchecked') {
                    icon = <CheckBoxOutlineBlank />;
                  } else if (state === 'crossed') {
                    icon = <Close color="error" />;
                  }
                  iconElement = <Box sx={{ mr: 1 }}>{icon}</Box>;
                  item = text;
                }

                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1,
                      width: '100%', // Assure une largeur de 100%
                      maxWidth: '300px', // Limite la largeur
                      justifyContent: {
                        xs: 'center',
                        sm:
                          contentAlignment === 'center'
                            ? 'center'
                            : contentAlignment === 'right'
                            ? 'flex-end'
                            : 'flex-start',
                      },
                    }}
                  >
                    <Box sx={{ width: '24px', textAlign: 'center' }}>{iconElement}</Box> {/* Largeur fixe pour les icônes */}
                    <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'start' }}>
                      {listType === 'checkbox' ? item : item}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>

        {/* Bouton CTA */}
        {translatedCtaText && (
          <Box
            sx={{
              mt: { xs: 2, sm: 3 },
              display: 'flex',
              justifyContent: {
                xs: 'center',
                sm:
                  ctaPosition === 'left'
                    ? 'flex-start'
                    : ctaPosition === 'center'
                    ? 'center'
                    : ctaPosition === 'right'
                    ? 'flex-end'
                    : 'center',
              },
              px: { xs: 2, sm: 0 },
            }}
          >
            <Button
              variant="contained"
              href={ctaLink}
              onClick={onCtaClick}
              sx={defaultCtaStyles}
            >
              {translatedCtaText}
            </Button>
          </Box>
        )}
      </Box>

      {/* Image en bas ou à droite */}
      {(imagePosition === 'bottom' || imagePosition === 'right') && image && (
        <Box
          component="img"
          src={image}
          alt={translatedTitle}
          sx={{
            width:
              imagePosition === 'left' || imagePosition === 'right'
                ? { xs: '100%', sm: '30%' } // Prend 100% de la largeur sur mobile
                : '100%',
            height: 'auto',
            mb: {
              xs: 2, // Marge en bas sur mobile
              sm: imagePosition === 'top' ? 2 : 0,
            },
            mt: {
              xs: 2, // Marge en haut sur mobile
              sm: imagePosition === 'bottom' ? 2 : 0,
            },
            mr: imagePosition === 'left' ? { xs: 0, sm: 2 } : 0,
            ml: imagePosition === 'right' ? { xs: 0, sm: 2 } : 0,
          }}
        />
      )}
    </Box>
  );
}

export default CustomContent;
