'use client';

import { Box, Card, CardBody, Heading, Text, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

const MotionBox = motion.create(Box);

export function Contact() {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      textAlign="center"
    >
      <Heading size="lg" mb={8}>
        Let's Connect!
      </Heading>
      <Card>
        <CardBody>
          <Text fontSize="lg" mb={6}>
            I'm always open to discussing new projects and opportunities.
          </Text>
          <Grid templateColumns={{ base: '1fr', md: '3fr 2fr' }} gap={8}>
            <ContactForm />
            <ContactInfo />
          </Grid>
        </CardBody>
      </Card>
    </MotionBox>
  );
}
