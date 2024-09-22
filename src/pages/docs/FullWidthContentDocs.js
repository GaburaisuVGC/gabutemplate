// docs/FullWidthContentDocs.js
import React from 'react';
import FullWidthContent from '../../components/FullWidthContent';
import { Box, Typography, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FullWidthContentDocs = () => {
    const theme = useTheme();
  return (
    <Box sx={{ padding: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
     }}>
      <Typography variant="h4" gutterBottom>
        FullWidthContent
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        Le composant <code>FullWidthContent</code> est conçu pour afficher du contenu en pleine largeur, avec des options de personnalisation telles que la position de l'image, les alignements, et les éléments de mise en évidence.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        Propriétés (Props)
      </Typography>
      
      <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Propriété</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Valeur par défaut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><code>title</code></TableCell>
              <TableCell>string | node</TableCell>
              <TableCell>Titre principal du contenu.</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>content</code></TableCell>
              <TableCell>string | node</TableCell>
              <TableCell>Contenu textuel principal.</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>image</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>URL de l'image à afficher.</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>imagePosition</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>Position de l'image ('left' ou 'right').</TableCell>
              <TableCell>'left'</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>backgroundImage</code></TableCell>
              <TableCell>string | null</TableCell>
              <TableCell>URL de l'image de fond.</TableCell>
              <TableCell>null</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>ctaText</code></TableCell>
              <TableCell>string | node | null</TableCell>
              <TableCell>Texte du bouton d'appel à l'action.</TableCell>
              <TableCell>null</TableCell>
            </TableRow>
            {/* Ajoutez d'autres props selon besoin */}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Typography variant="h6" gutterBottom>
        Exemple d'utilisation
      </Typography>
      
      <Box sx={{ marginBottom: 4 }}>
        <FullWidthContent
          title="Découvrez Nos Services"
          content="Nous offrons une gamme complète de services pour répondre à vos besoins."
          image="https://via.placeholder.com/300"
          imagePosition="right"
          ctaText="Contactez-nous"
          ctaLink="/contact"
          focusWordKeys={['Services']}
          focusColor="secondary.main"
          backgroundImage="https://via.placeholder.com/1200x400"
        />
      </Box>
      
      <Typography variant="body2" color="text.secondary">
        <strong>Remarque :</strong> Ce composant offre une grande flexibilité pour la mise en page et la personnalisation. N'hésitez pas à explorer toutes les propriétés pour adapter le composant à vos besoins spécifiques.
      </Typography>
    </Box>
  );
};

export default FullWidthContentDocs;
