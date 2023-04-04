import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";
import './sign-up.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const defaultFormFields = {
    username : "",
    email: "",
    password: "",
    confirmPassword:""
}

function SignUp(){
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {username,email,password,confirmPassword } = formFields;
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
        console.log(formFields);
    }
     
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
       event.preventDefault();
       if(password !== confirmPassword){
        alert("Confirm password and password are not matched");
       }
       try{
        await createAuthUserWithEmailAndPassword(email,password);
        resetFormFields();
        navigate('/');
       }catch(error){
        if(error.code === 'auth/email-already-in-use'){
            alert("Account is already in use");
          }else{
          console.log('user creation error',error);
          }
       }
    }

    return(
      <div>
        <Header/>
        <form onSubmit={handleSubmit}>
        <Flex
      minH={'25vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('pink.50', 'pink.800')}>
      <Stack spacing={5} mx={'auto'} maxW={'lg'} py={10} px={10}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'pink.600'}>
            create an account to enjoy  our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('pink.200', 'white')}
          boxShadow={'lg'}
          p={10}>
          <Stack spacing={2}>
          <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" name ='username' value={username} onChange={handleChange}  required/>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name ='email' value={email} onChange={handleChange}  required/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name ='password' value={password} onChange={handleChange}  required/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showConfirmPassword ? 'text' : 'password'} name ='confirmPassword' value={confirmPassword} onChange={handleChange}  required/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword)
                    }>
                    {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={5} pt={2}>
              <Button
                loadingText="Submitting"
                type="submit"
                size="lg"
                bg={'pink.400'}
                color={'white'}
                _hover={{
                  bg: 'pink.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={1}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </form>
      </div>
    )
}

export default SignUp;

