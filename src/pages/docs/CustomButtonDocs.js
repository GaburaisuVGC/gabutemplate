import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const CustomButtonDocs = () => {
    const theme = useTheme();
  return (
    <Box sx={{ padding: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
     }}>
      <Typography variant="h4" gutterBottom>
        CustomButton
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        Le composant <code>CustomButton</code> est une extension du composant <code>Button</code> de Material-UI, stylisé avec <code>styled-components</code>. Il adapte ses couleurs en fonction du mode de thème (clair ou sombre).
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
              <TableCell><code>theme.palette.mode</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>Mode de thème actuel ('light' ou 'dark'). Utilisé pour ajuster les couleurs.</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>...ButtonProps</code></TableCell>
              <TableCell>object</TableCell>
              <TableCell>Propriétés supplémentaires transmises au composant MUI Button.</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      <Typography variant="body2" color="text.secondary">
        <strong>Note :</strong> Ce composant hérite de toutes les propriétés du composant <code>Button</code> de Material-UI, vous pouvez donc le personnaliser davantage en passant des props supplémentaires.
      </Typography>
    </Box>
  );
};

export default CustomButtonDocs;
