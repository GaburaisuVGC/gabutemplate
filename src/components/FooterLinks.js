import React from 'react';
import { Typography, Link, Box } from '@mui/material';

function FooterLinks({ title, links }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box component="ul" sx={{ listStyleType: 'none', p: 0, m: 0 }}>
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href} color="inherit" variant="body2" underline="none">
              {link.text}
            </Link>
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default FooterLinks;
