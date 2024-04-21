// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, VStack, HStack, Text, Input, Button, Image } from "@chakra-ui/react";
import { FaSearch, FaCloudSun, FaTemperatureHigh, FaWind, FaTint } from "react-icons/fa";

const Index = () => {
  return (
    <VStack minH="100vh" p={4} bg="blue.200" align="center" justify="center">
      <Box bg="white" p={4} borderRadius="lg" boxShadow="md" maxW="sm" w="full">
        <VStack spacing={4}>
          <HStack w="full">
            <Input placeholder="Search city" variant="filled" />
            <Button colorScheme="blue" leftIcon={<FaSearch />}>
              Search
            </Button>
          </HStack>
          <Box w="full" p={4} bg="blue.50" borderRadius="md">
            <VStack spacing={3}>
              <Text fontSize="2xl" fontWeight="bold">
                San Francisco
              </Text>
              <HStack spacing={4}>
                <FaCloudSun size="3rem" />
                <Text fontSize="5xl" fontWeight="bold">
                  72°F
                </Text>
              </HStack>
              <HStack spacing={10} justifyContent="center">
                <VStack>
                  <FaTemperatureHigh />
                  <Text>High/Low</Text>
                  <Text>77°F / 56°F</Text>
                </VStack>
                <VStack>
                  <FaWind />
                  <Text>Wind</Text>
                  <Text>5 mph</Text>
                </VStack>
                <VStack>
                  <FaTint />
                  <Text>Humidity</Text>
                  <Text>68%</Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Index;
