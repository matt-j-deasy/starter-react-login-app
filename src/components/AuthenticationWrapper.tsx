import Authenticated from "components/Authenticated";
import Unauthenticated from "components/Unauthenticated";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "slices/users";

const AuthenticationWrapper = () => {
  const currentUser = useSelector(selectCurrentUser);

  if (!currentUser) {
    return <Unauthenticated />;
  }

  return <Authenticated />;
};

export default AuthenticationWrapper;
