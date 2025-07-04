'use client';

import { Box, Heading, Text, HStack, IconButton, useColorMode, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody } from '@chakra-ui/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionIconButton = motion.create(IconButton);

export function Hero() {
  const { colorMode } = useColorMode();

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      textAlign="center"
      mb={16}
    >
      <Heading
        as="h1"
        size="3xl"
        mb={6}
        bgGradient={colorMode === 'light' ? 'linear(to-r, blue.500, purple.500)' : 'linear(to-r, blue.200, purple.200)'}
        bgClip="text"
      >
        Daniel Frutos
      </Heading>
      <Text fontSize="2xl" color={colorMode === 'light' ? 'gray.600' : 'gray.300'} mb={8}>
        Full Stack Developer
      </Text>
      <HStack spacing={4} justify="center">
        <a href='https://github.com/1Daniiel8' target="_blank">
          <MotionIconButton
            aria-label="GitHub"
            icon={<Github />}
            variant="outline"
            rounded="full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </a>
        <a href='https://www.linkedin.com/in/daniel-frutos-83b522210/' target="_blank">
          <MotionIconButton
            aria-label="LinkedIn"
            icon={<Linkedin />}
            variant="outline"
            rounded="full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </a>
        <Popover>
          <PopoverTrigger>
            <MotionIconButton
              aria-label="Email"
              icon={<Mail />}
              variant="outline"
              rounded="full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Text>danielfrutosgonzalez@gmail.com</Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      <MotionBox
        mt={12}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        color={colorMode === 'light' ? 'gray.800' : 'gray.200'}
      >
        <ArrowDown className="mx-auto" />
      </MotionBox>
    </MotionBox>
  );
}