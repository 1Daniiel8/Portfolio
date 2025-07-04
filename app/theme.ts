import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: ({ colorMode }) => ({
      body: {
        bg: colorMode === 'dark' ? 'gray.800' : 'gray.50',
        color: colorMode === 'dark' ? 'gray.100' : 'gray.800',
      },
    }),
  },
  components: {
    Card: {
      baseStyle: ({ colorMode }) => ({
        container: {
          bg: colorMode === 'dark' ? 'gray.700' : 'white',
        },
      }),
    },
    Button: {
      baseStyle: {
        _hover: {
          transform: 'translateY(-2px)',
          transition: 'all 0.2s',
        },
      },
    },
  },
});

export default theme;