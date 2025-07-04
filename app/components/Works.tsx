'use client';

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ProjectCard } from './WorksCard';
import profileCartasur from '../../img/perfilCartasur.png';
import profileQuantux from '../../img/quantux_salud_logo.jpg';

const MotionBox = motion.create(Box);

const projects = [
  {
    title: 'CartaSur',
    description: 'Full Stack Developer Jr.',
    tech: ['JavaScript', 'C# .NET', 'SQL', 'HTML', 'CSS', 'Postman', 'Entity Framework', 'ADO.NET'],
    image: profileCartasur,
    link: 'https://www.cartasur.com.ar/',
  },
  {
    title: 'Quantux Salud',
    description: 'Full Stack Developer',
    tech: ['React', 'Node.js', 'MongoDB', 'NestJS', 'Express.js', 'Docker', 'REST API', 'ViteJS'],
    image: profileQuantux,
    link: 'https://quantuxsalud.com/',
  },
];

export function Projects() {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      mb={16}
    >
      <Heading size="lg" mb={8}>
        Experiencia Laboral
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </SimpleGrid>
    </MotionBox>
  );
}
