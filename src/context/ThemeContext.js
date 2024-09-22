import { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function CustomThemeProvider({ children }) {
  // Initialiser le mode à partir du localStorage ou par défaut 'light'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('color-mode');
    return savedMode ? savedMode : 'light';
  });

  // Mettre à jour le localStorage chaque fois que le mode change
  useEffect(() => {
    localStorage.setItem('color-mode', mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode]
  );

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              // Palette pour le mode clair
              background: {
                default: '#f5f5f5',
                paper: '#ffffff',
              },
              text: {
                primary: '#000000',
              },
            }
          : {
              // Palette pour le mode sombre
              background: {
                default: '#121212',
                paper: '#1e1e1e',
              },
              text: {
                primary: '#ffffff',
              },
            }),
      },
    });
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
