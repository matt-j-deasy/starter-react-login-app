import { Flex, Box, Heading } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Dashboard</Heading>
        </Box>
        <Box my={4} textAlign="left">
          Welcome User
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
