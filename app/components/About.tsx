'use client';

import { Box, Heading, Text, Card, CardBody, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Image } from '@chakra-ui/next-js';
import PerfilJpeg from '../../img/perfil.jpg';

const MotionCard = motion.create(Card);

export function About() {
  return (
    <MotionCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      mb={16}
      borderRadius="20px"
    >
      <CardBody className="aboutMeContainer">
        <Box className="imgProfileContainer">
          <Image src={PerfilJpeg} className="imgProfile" alt="Perfil" />
        </Box>
        <Box>
          <HStack mb={8} spacing={2}>
            <Heading size="xl">About Me</Heading>
          </HStack>
          <Text fontSize="lg" lineHeight="tall">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
        </Box>
      </CardBody>
    </MotionCard>
  );
}
