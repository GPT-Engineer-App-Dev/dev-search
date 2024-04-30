import { useState } from 'react';
import { Box, Flex, Text, Heading, Tag, VStack, SimpleGrid, Input, Button, Modal, FormControl, FormLabel, Select, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const developers = [
  { id: 1, name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node'] },
  { id: 2, name: 'Jane Smith', location: 'London, UK', technologies: ['.NET', 'JavaScript'] },
  { id: 3, name: 'Alice Johnson', location: 'Berlin, Germany', technologies: ['Go', 'React'] }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTech, setFilterTech] = useState('');
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newTechnologies, setNewTechnologies] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredDevelopers = developers.filter(dev => {
    return (dev.location.toLowerCase().includes(searchTerm.toLowerCase()) || dev.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
           (filterTech === '' || dev.technologies.includes(filterTech));
  });

  const handleAddDeveloper = () => {
    const newDeveloper = { id: developers.length + 1, name: newName, location: newLocation, technologies: newTechnologies };
    developers.push(newDeveloper);
    onClose(); // Close the modal
    setNewName(''); // Reset form state
    setNewLocation('');
    setNewTechnologies([]);
  };

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
        <Button onClick={onOpen} colorScheme="blue" mt={4}>Add Developer</Button>
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Developer</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input placeholder="Location" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Technologies</FormLabel>
              <Select placeholder="Select technology" onChange={(e) => setNewTechnologies([...newTechnologies, e.target.value])} multiple>
                <option value="React">React</option>
                <option value="Node">Node</option>
                <option value=".NET">.NET</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Go">Go</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddDeveloper}>
              Add Developer
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;