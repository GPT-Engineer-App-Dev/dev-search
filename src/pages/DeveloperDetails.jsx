import { useParams } from 'react-router-dom';
import { Box, Flex, Text, Heading, Tag, Button, VStack } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';

const developers = [
  { id: '1', name: 'John Doe', location: 'New York, USA', technologies: ['React', 'Node'], bio: 'Experienced Full Stack Developer with a demonstrated history in the tech industry.', email: 'john.doe@example.com' },
  { id: '2', name: 'Jane Smith', location: 'London, UK', technologies: ['.NET', 'JavaScript'], bio: 'Passionate Software Engineer skilled in .NET and modern JavaScript ecosystems.', email: 'jane.smith@example.com' },
  { id: '3', name: 'Alice Johnson', location: 'Berlin, Germany', technologies: ['Go', 'React'], bio: 'Innovative and solution-oriented developer with expertise in Go and React.', email: 'alice.johnson@example.com' }
];

const DeveloperDetails = () => {
  const { id } = useParams();
  const developer = developers.find(dev => dev.id === id);

  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Heading mb={4}>{developer.name}</Heading>
        <Text fontSize="lg">{developer.location}</Text>
        <Text fontSize="md" mt={2}>{developer.bio}</Text>
        <VStack spacing={2} mt={4}>
          {developer.technologies.map(tech => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </VStack>
        <Button leftIcon={<FaEnvelope />} mt={5} colorScheme="blue">
          Message {developer.name}
        </Button>
      </Flex>
    </Box>
  );
};

export default DeveloperDetails;