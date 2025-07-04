'use client';

import { VStack, Text, HStack, Icon, Link, useColorMode } from '@chakra-ui/react';
import { Mail, Phone } from 'lucide-react';

export function ContactInfo() {
  const { colorMode } = useColorMode();

  return (
    <VStack
      spacing={4}
      align="start"
      p={6}
      bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
      borderRadius="lg"
    >
      <Text fontSize="xl">Telefono: </Text>
      <HStack spacing={3}>
        <Icon as={Phone} boxSize={5} />
        <Link href="tel:+541140379978">
          <Text fontSize="lg">(+54) 11 4037-9978</Text>
        </Link>
      </HStack>

      <Text fontSize="xl">Email: </Text>
      <HStack spacing={3}>
        <Icon as={Mail} boxSize={5} />
        <Link href="mailto:danielfrutosgonzalez@gmail.com">
          <Text fontSize="lg">danielfrutosgonzalez@gmail.com</Text>
        </Link>
      </HStack>
    </VStack>
  );
}
