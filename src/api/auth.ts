import { User } from "types/User";

export const authenticate = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  return Promise.resolve({ name: "User", email: email });
};
