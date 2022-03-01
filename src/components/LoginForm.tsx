import {
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import { authenticate } from "api/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "slices/users";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    authenticate({ email: data.email, password: data.password }).then(
      (user) => {
        dispatch(setCurrentUser(user));
      }
    );
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired={true}>
              <FormLabel>Email</FormLabel>
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="test@test.com"
              />
            </FormControl>
            <FormControl isRequired={true} mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                {...register("password", { required: true })}
                type="password"
                placeholder="*******"
              />
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginForm;
