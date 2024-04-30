import { Box, Flex, Text, Heading, Tag, VStack, SimpleGrid } from '@chakra-ui/react';

const developers = [
  { id: 1, name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node'] },
  { id: 2, name: 'Jane Smith', location: 'London, UK', technologies: ['.NET', 'JavaScript'] },
  { id: 3, name: 'Alice Johnson', location: 'Berlin, Germany', technologies: ['Go', 'React'] }
];

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Heading mb={4}>Welcome to Particles</Heading>
        <Text fontSize="lg">Discover top software talent specialized in web technologies.</Text>
      </Flex>
      <VStack spacing={8}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {developers.map(dev => (
            <Box key={dev.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{dev.name}</Heading>
              <Text mt={4}>{dev.location}</Text>
              <Flex mt={2}>
                {dev.technologies.map(tech => (
                  <Tag key={tech} mr={2}>{tech}</Tag>
                ))}
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;