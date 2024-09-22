import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function FullWidthContent(props) {
  const {
    title,
    content,
    image,
    imagePosition = "left",
    backgroundImage = null,
    ctaText = null,
    ctaLink = "#",
    ctaStyles = {},
    onCtaClick = null,
    sx = {},
    contentAlignment = "left",
    ctaAlignment = null,
    titleColor = "text.primary",
    contentColor = "text.primary",
    focusWordKeys = [],
    focusColor = "primary.main",
    marginTopNonMobile = 0,
  } = props;

  const { t } = useTranslation();

  const translatedTitle = typeof title === "string" ? t(title) : title;
  const translatedContent = typeof content === "string" ? t(content) : content;

  const focusWords = focusWordKeys.map((key) => t(key));

  // Styles par défaut pour le CTA
  const defaultCtaStyles = {
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    borderRadius: 2,
    border: "none",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
    ...ctaStyles,
  };

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function highlightWords(text, focusWords, focusColor) {
    if (!focusWords || focusWords.length === 0) return text;

    // Échapper les caractères spéciaux dans les focusWords
    const escapedWords = focusWords.map((word) => escapeRegExp(word));
    const regex = new RegExp(`(${escapedWords.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (
        focusWords.some((word) => word.toLowerCase() === part.toLowerCase())
      ) {
        return (
          <Box key={index} component="span" sx={{ color: focusColor }}>
            {part}
          </Box>
        );
      } else {
        return part;
      }
    });
  }

  return (
    <Box
      sx={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: 4,
        mt: { md: marginTopNonMobile }, // Application de la marge-top uniquement sur md et plus
        display: "flex",
        flexDirection:
          imagePosition === "left"
            ? { xs: "column", md: "row" }
            : { xs: "column", md: "row-reverse" },
        alignItems: "center",
        ...sx,
      }}
    >
      {/* Image */}
      {image && (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
          }}
        />
      )}

      {/* Contenu textuel */}
      <Box
        sx={{
          flex: 1,
          textAlign: contentAlignment,
          color: "text.primary",
          p: 2,
          backgroundColor: "transparent",
        }}
      >
        {/* Titre */}
        <Typography variant="h3" gutterBottom sx={{ color: titleColor }}>
          {highlightWords(translatedTitle, focusWords, focusColor)}
        </Typography>

        {/* Contenu */}
        <Typography variant="body1" gutterBottom sx={{ color: contentColor }}>
          {translatedContent}
        </Typography>

        {/* Bouton CTA */}
        {ctaText && (
          <Box
            sx={{
              display: "flex",
              justifyContent: ctaAlignment || contentAlignment,
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              href={ctaLink}
              onClick={onCtaClick}
              sx={defaultCtaStyles}
            >
              {typeof ctaText === "string" ? t(ctaText) : ctaText}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FullWidthContent;
