import { Button } from "@chakra-ui/react";
const LogoutButton = () => {
  const logout = () => {
    window.location.replace("logout");
  };

  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
