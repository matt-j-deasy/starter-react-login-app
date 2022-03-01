import { Box, Flex } from "@chakra-ui/react";
import LogoutButton from "components/LogoutButton";
import LogoutPage from "pages/LogoutPage";
import DashboardPage from "pages/DashboardPage";
import LoginPage from "pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Authenticated = () => {
  return (
    <Box>
      {/* Topbar */}
      <Flex justifyContent={"flex-end"}>
        <LogoutButton />
      </Flex>
      {/* Page Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Authenticated;
