import { Box, Flex } from "@chakra-ui/react";
import Dashboard from "components/Dashboard";
import LogoutButton from "components/LogoutButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Authenticated = () => {
  return (
    <Box>
      <Flex justifyContent={"flex-end"}>
        <LogoutButton />
      </Flex>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Authenticated;
