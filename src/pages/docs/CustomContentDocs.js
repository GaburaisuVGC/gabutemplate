import React from 'react';
import CustomContent from '../../components/CustomContent';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CustomContentDocs = () => {
    const theme = useTheme();
  return (
    <Box sx={{ padding: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
     }}>
      {/* Titre Principal */}
      <Typography variant="h4" gutterBottom>
        CustomContent
      </Typography>

      {/* Description Générale */}
      <Typography variant="body1" gutterBottom>
        Le composant <code>CustomContent</code> est un conteneur polyvalent permettant d'afficher du contenu textuel, des images, des listes, et des appels à l'action (CTA) avec des options de personnalisation avancées. Il est conçu pour être flexible et s'adapter à divers besoins de mise en page.
      </Typography>

      {/* Section des Propriétés */}
      <Typography variant="h6" gutterBottom>
        Propriétés (Props)
      </Typography>

      {/* Tableau des Propriétés */}
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
            {/* Propriétés de Base */}
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
              <TableCell>Position de l'image ('top', 'bottom', 'left', 'right').</TableCell>
              <TableCell>'top'</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>spacing</code></TableCell>
              <TableCell>number</TableCell>
              <TableCell>Espace intérieur (padding) du conteneur.</TableCell>
              <TableCell>2</TableCell>
            </TableRow>

            {/* Propriétés de Style */}
            <TableRow>
              <TableCell><code>borderRadius</code></TableCell>
              <TableCell>number</TableCell>
              <TableCell>Rayon de bordure du conteneur.</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>boxShadow</code></TableCell>
              <TableCell>number</TableCell>
              <TableCell>Ombrage du conteneur (niveau de profondeur).</TableCell>
              <TableCell>1</TableCell>
            </TableRow>

            {/* Propriétés d'Animation */}
            <TableRow>
              <TableCell><code>animationDirection</code></TableCell>
              <TableCell>string | null</TableCell>
              <TableCell>Direction de l'animation ('left', 'right', 'up', 'down').</TableCell>
              <TableCell>null</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>animationDuration</code></TableCell>
              <TableCell>number</TableCell>
              <TableCell>Durée de l'animation en secondes.</TableCell>
              <TableCell>0.5</TableCell>
            </TableRow>

            {/* Propriétés CTA */}
            <TableRow>
              <TableCell><code>ctaText</code></TableCell>
              <TableCell>string | node | null</TableCell>
              <TableCell>Texte du bouton d'appel à l'action.</TableCell>
              <TableCell>null</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>ctaLink</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>Lien URL du CTA.</TableCell>
              <TableCell>'#'</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>ctaPosition</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>Position du CTA ('left', 'center', 'right', 'bottom').</TableCell>
              <TableCell>'bottom'</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>ctaStyles</code></TableCell>
              <TableCell>object</TableCell>
              <TableCell>Styles personnalisés pour le bouton CTA.</TableCell>
              <TableCell>{`{}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>onCtaClick</code></TableCell>
              <TableCell>function | null</TableCell>
              <TableCell>Fonction de rappel pour l'événement de clic sur le CTA.</TableCell>
              <TableCell>null</TableCell>
            </TableRow>

            {/* Propriétés de Liste */}
            <TableRow>
              <TableCell><code>listItems</code></TableCell>
              <TableCell>array</TableCell>
              <TableCell>Éléments de la liste à afficher.</TableCell>
              <TableCell>[]</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>listType</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>Type de liste ('bullet' ou 'checkbox').</TableCell>
              <TableCell>'bullet'</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>bulletIcon</code></TableCell>
              <TableCell>node</TableCell>
              <TableCell>Icône utilisée pour les éléments de liste de type 'bullet'.</TableCell>
              <TableCell><code>&lt;Circle /&gt;</code></TableCell>
            </TableRow>

            {/* Propriétés de Mise en Page */}
            <TableRow>
              <TableCell><code>contentAlignment</code></TableCell>
              <TableCell>string</TableCell>
              <TableCell>Alignement du contenu textuel ('left', 'center', 'right', 'inherit').</TableCell>
              <TableCell>'inherit'</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><code>titleMarginTop</code></TableCell>
              <TableCell>number</TableCell>
              <TableCell>Marge supérieure du titre.</TableCell>
              <TableCell>1</TableCell>
            </TableRow>

            {/* Autres Propriétés */}
            <TableRow>
              <TableCell><code>sx</code></TableCell>
              <TableCell>object</TableCell>
              <TableCell>Styles supplémentaires à appliquer au conteneur principal.</TableCell>
              <TableCell>{`{}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Section des Configurations Détails */}
      <Typography variant="h6" gutterBottom>
        Configuration Avancée
      </Typography>

      {/* Sous-section : Taille */}
      <Typography variant="subtitle1" gutterBottom>
        Taille (Size)
      </Typography>
      <Typography variant="body2" gutterBottom>
        La propriété <code>spacing</code> contrôle l'espace intérieur (padding) du conteneur. Elle accepte une valeur numérique correspondant aux unités de l'espace définies dans le thème Material-UI.
      </Typography>

      {/* Sous-section : Bordure */}
      <Typography variant="subtitle1" gutterBottom>
        Bordure (Border)
      </Typography>
      <Typography variant="body2" gutterBottom>
        La propriété <code>borderRadius</code> définit le rayon des coins du conteneur. Vous pouvez ajuster cette valeur pour obtenir des coins plus arrondis ou plus carrés.
      </Typography>

      {/* Sous-section : Ombrage */}
      <Typography variant="subtitle1" gutterBottom>
        Ombrage (Shadow)
      </Typography>
      <Typography variant="body2" gutterBottom>
        La propriété <code>boxShadow</code> permet d'ajouter une ombre portée au conteneur. Les valeurs disponibles correspondent aux niveaux d'ombre définis dans le thème Material-UI.
      </Typography>

      {/* Sous-section : CTA (Call to Action) */}
      <Typography variant="subtitle1" gutterBottom>
        Appel à l'Action (CTA)
      </Typography>
      <Typography variant="body2" gutterBottom>
        Les propriétés <code>ctaText</code>, <code>ctaLink</code>, <code>ctaPosition</code>, <code>ctaStyles</code>, et <code>onCtaClick</code> permettent de personnaliser le bouton CTA. Vous pouvez définir le texte, le lien, la position (gauche, centre, droite, bas), les styles personnalisés, et gérer les événements de clic.
      </Typography>

      {/* Sous-section : Images */}
      <Typography variant="subtitle1" gutterBottom>
        Images
      </Typography>
      <Typography variant="body2" gutterBottom>
        La propriété <code>image</code> permet d'afficher une image dans le conteneur. La position de l'image est contrôlée par <code>imagePosition</code>, qui peut être 'top', 'bottom', 'left', ou 'right'. Vous pouvez également ajuster la taille et les marges de l'image via les styles intégrés.
      </Typography>

      {/* Sous-section : Animations */}
      <Typography variant="subtitle1" gutterBottom>
        Animations
      </Typography>
      <Typography variant="body2" gutterBottom>
        Les propriétés <code>animationDirection</code> et <code>animationDuration</code> permettent d'ajouter des animations au conteneur. <code>animationDirection</code> définit la direction de l'animation ('left', 'right', 'up', 'down'), tandis que <code>animationDuration</code> contrôle la durée de l'animation en secondes.
      </Typography>

      {/* Section des Exemples */}
      <Typography variant="h6" gutterBottom>
        Exemples d'Utilisation
      </Typography>

      {/* Exemple 1 : Configuration de Base */}
      <Typography variant="subtitle1" gutterBottom>
        1. Configuration de Base
      </Typography>
      <Typography variant="body2" gutterBottom>
        Cet exemple montre l'utilisation de base du composant avec des propriétés minimales.
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <CustomContent
          title="Bienvenue sur notre site"
          content="Découvrez nos fonctionnalités exceptionnelles et profitez d'une expérience inégalée."
          image="https://via.placeholder.com/150"
          imagePosition="left"
        />
      </Box>

      {/* Exemple 2 : Personnalisation Avancée */}
      <Typography variant="subtitle1" gutterBottom>
        2. Personnalisation Avancée
      </Typography>
      <Typography variant="body2" gutterBottom>
        Cet exemple illustre une configuration avancée avec bordure arrondie, ombrage, CTA personnalisé, et animation.
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <CustomContent
          title="Nos Services"
          content="Nous offrons une gamme complète de services pour répondre à vos besoins spécifiques."
          image="https://via.placeholder.com/200"
          imagePosition="right"
          spacing={4}
          borderRadius={8}
          boxShadow={3}
          animationDirection="left"
          animationDuration={1}
          ctaText="Contactez-nous"
          ctaLink="#"
          ctaPosition="right"
          ctaStyles={{
            backgroundColor: 'secondary.main',
            '&:hover': {
              backgroundColor: 'secondary.dark',
            },
          }}
          onCtaClick={() => alert('CTA Cliqué!')}
        />
      </Box>

      {/* Exemple 3 : Liste avec Cases à Cocher */}
      <Typography variant="subtitle1" gutterBottom>
        3. Liste avec Cases à Cocher
      </Typography>
      <Typography variant="body2" gutterBottom>
        Utilisation du type de liste 'checkbox' avec différents états des cases.
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <CustomContent
          title="Fonctionnalités Clés"
          content="Voici quelques-unes de nos fonctionnalités principales."
          listItems={[
            { text: "Facilité d'utilisation", state: "checked" },
            { text: "Support 24/7", state: "unchecked" },
            { text: "Sécurité avancée", state: "crossed" },
          ]}
          listType="checkbox"
          ctaText="En savoir plus"
          ctaLink="#"
          ctaPosition="center"
        />
      </Box>

      {/* Exemple 4 : Image en Haut avec Animation */}
      <Typography variant="subtitle1" gutterBottom>
        4. Image en Haut avec Animation
      </Typography>
      <Typography variant="body2" gutterBottom>
        L'image est positionnée en haut avec une animation d'apparition de la section.
      </Typography>
      <Box sx={{ marginBottom: 4 }}>
        <CustomContent
          title="À Propos de Nous"
          content="Apprenez-en davantage sur notre mission et notre équipe dédiée."
          image="https://via.placeholder.com/300"
          imagePosition="top"
          animationDirection="up"
          animationDuration={0.8}
          ctaText="Lire la Suite"
          ctaLink="#"
        />
      </Box>

      {/* Section de Remarques */}
      <Typography variant="body2" color="text.secondary">
        <strong>Remarque :</strong> Le composant <code>CustomContent</code> est hautement personnalisable. Vous pouvez ajuster les propriétés en fonction de vos besoins spécifiques pour obtenir la mise en page désirée. N'hésitez pas à explorer toutes les options disponibles pour tirer le meilleur parti de ce composant.
      </Typography>
    </Box>
  );
};

export default CustomContentDocs;
