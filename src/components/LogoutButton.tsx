import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "slices/users";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setCurrentUser(undefined));
  };

  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
