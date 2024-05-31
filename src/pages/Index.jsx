import { Container, Text, VStack, Heading, Button, Box, Image, SimpleGrid, Flex, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Our Clothing Store</Heading>
        <Text fontSize="lg" textAlign="center">Shop the latest trends in fashion for men, women, and kids.</Text>
        <Box boxSize="2xl">
          <Image src="/images/ecommerce-banner.jpg" alt="Ecommerce Banner" />
        </Box>
        <Button as={Link} to="/shop" colorScheme="teal" size="lg">Shop Now</Button>
        <Flex justify="center" width="100%">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="100%">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center">
              <Image src="/images/women.jpg" alt="Women's Clothing" borderRadius="md" />
              <Heading as="h3" size="lg" mt={4}>Women's Collection</Heading>
              <Badge colorScheme="pink" variant="subtle" mt={2}>New Arrivals</Badge>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center">
              <Image src="/images/men.jpg" alt="Men's Clothing" borderRadius="md" />
              <Heading as="h3" size="lg" mt={4}>Men's Collection</Heading>
              <Badge colorScheme="blue" variant="subtle" mt={2}>Trending</Badge>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" textAlign="center">
              <Image src="/images/kids.jpg" alt="Kids' Clothing" borderRadius="md" />
              <Heading as="h3" size="lg" mt={4}>Kids' Collection</Heading>
              <Badge colorScheme="green" variant="subtle" mt={2}>Summer Styles</Badge>
            </Box>
          </SimpleGrid>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;