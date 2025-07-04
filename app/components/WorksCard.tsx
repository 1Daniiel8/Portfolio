'use client';

import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  HStack,
  Tag,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

const MotionBox = motion.create(Box);

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: StaticImageData;
  link: string;
}

interface WorksCardProps {
  project: Project;
  index: number;
}

export function WorksCard({ project, index }: WorksCardProps) {
  const { colorMode } = useColorMode();

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <Card overflow="hidden" h="full" variant="filled" cursor="pointer">
          <Box position="relative" overflow="hidden">
            <Image
              src={project.image.src}
              alt={project.title}
              objectFit="cover"
              aspectRatio={18 / 9}
              transition="transform 0.3s ease"
              _hover={{ transform: 'scale(1.1)' }}
              style={{ width: '100%' }}
            />
          </Box>
          <CardBody>
            <Heading size="md" mb={2}>
              {project.title}
            </Heading>
            <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'} mb={4}>
              {project.description}
            </Text>
            <HStack spacing={2} flexWrap="wrap">
              {project.tech.map((tech, techIndex) => (
                <Tag
                  key={techIndex}
                  size="md"
                  colorScheme={colorMode === 'dark' ? 'blue' : 'purple'}
                  variant="subtle"
                >
                  {tech}
                </Tag>
              ))}
            </HStack>
          </CardBody>
        </Card>
      </a>
    </MotionBox>
  );
}
