import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "slices/users";

const LogoutPage = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setCurrentUser(undefined));
  };

  useEffect(() => {
    logout();
    // eslint-disable-next-line
  }, []);

  return null;
};

export default LogoutPage;
