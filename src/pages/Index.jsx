import { useState } from 'react';
import { Box, Flex, Text, Heading, Tag, VStack, SimpleGrid, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const developers = [
  { id: 1, name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node'] },
  { id: 2, name: 'Jane Smith', location: 'London, UK', technologies: ['.NET', 'JavaScript'] },
  { id: 3, name: 'Alice Johnson', location: 'Berlin, Germany', technologies: ['Go', 'React'] }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTech, setFilterTech] = useState('');

  const filteredDevelopers = developers.filter(dev => {
    return (dev.location.toLowerCase().includes(searchTerm.toLowerCase()) || dev.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
           (filterTech === '' || dev.technologies.includes(filterTech));
  });

  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Heading mb={4}>Welcome to Particles</Heading>
        <Text fontSize="lg">Discover top software talent specialized in web technologies.</Text>
      </Flex>
      <Flex mb={5} justify="center">
        <Input placeholder="Search by name or location" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mr={2} />
        <Button onClick={() => setFilterTech('React')}>React</Button>
        <Button onClick={() => setFilterTech('Node')}>Node</Button>
        <Button onClick={() => setFilterTech('JavaScript')}>JavaScript</Button>
        <Button onClick={() => setFilterTech('.NET')}>.NET</Button>
        <Button onClick={() => setFilterTech('Go')}>Go</Button>
        <Button onClick={() => setFilterTech('')}>Clear Filter</Button>
      </Flex>
      <VStack spacing={8}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {filteredDevelopers.map(dev => (
            <Box key={dev.id} p={5} shadow="md" borderWidth="1px">
              <Link to={`/developer/${dev.id}`}><Heading fontSize="xl">{dev.name}</Heading></Link>
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