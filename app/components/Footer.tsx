'use client';

import { HStack, Text, useColorMode, Link } from '@chakra-ui/react';

export function Footer() {
  const { colorMode } = useColorMode();

  return (
    <HStack display="flex" p={6} bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}>
      <Text>
        © 2024 - Proyecto creado por Daniel Frutos con{' '}
        <Link href="https://nextjs.org/" target="_blank">
          NextJS
        </Link>{' '}
        y{' '}
        <Link href="https://www.chakra-ui.com/" target="_blank">
          chackra-ui
        </Link>
      </Text>
    </HStack>
  );
}
