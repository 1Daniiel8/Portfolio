'use client';

import { IconButton, useColorMode, Tooltip } from '@chakra-ui/react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionIconButton = motion.create(IconButton);

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}>
      <MotionIconButton
        position="fixed"
        bottom={4}
        right={4}
        aria-label="Toggle theme"
        icon={colorMode === 'light' ? <Moon /> : <Sun />}
        onClick={toggleColorMode}
        size="lg"
        rounded="full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        colorScheme={colorMode === 'light' ? 'purple' : 'yellow'}
      />
    </Tooltip>
  );
}