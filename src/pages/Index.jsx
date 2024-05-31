import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Our Ecommerce Store</Heading>
        <Text fontSize="lg">Shop the latest trends in fashion, electronics, and more.</Text>
        <Box boxSize="sm">
          <Image src="/images/ecommerce-banner.jpg" alt="Ecommerce Banner" />
        </Box>
        <Button as={Link} to="/shop" colorScheme="teal" size="lg">Shop Now</Button>
      </VStack>
    </Container>
  );
};

export default Index;