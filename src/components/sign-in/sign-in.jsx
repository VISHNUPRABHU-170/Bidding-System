import { useContext, useState } from "react"
import { signInUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from "../../utils/firebase";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  InputRightElement,
  Input,
  Checkbox,
  Center,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { AuthContext } from "../../context/AuthContext";

const defaultFormFields = {
    email: "",
    password: ""
}

function SignIn(){
    
    const [formFields,setFormFields] = useState(defaultFormFields);
    const { email,password } = formFields;
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    

    const handleChange = (event) => {
       const {name,value} = event.target;
       setFormFields({...formFields,[name]:value});
    }

    const handleSubmit = async(event) => {
       event.preventDefault();
       try{
        await signInUserWithEmailAndPassword(email,password);
        resetFormFields();
        navigate('/');
        
       }catch(error){
        switch (error.code) {
            case 'auth/wrong-password':
              alert('incorrect password for email');
              break;
            case 'auth/user-not-found':
              alert('no user associated with this email');
              break;
            default:
              console.log(error);
          }
       }
    }

    const signInPopUp = async() => {
      await signInWithGooglePopup();
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
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={10}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'pink.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('pink.200', 'pink.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name ='email' value={email} onChange={handleChange}  required/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} name='password' value={password} onChange={handleChange} required/>
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
            <Stack spacing={10}>
              
              <Button
                type="submit"
                bg={'pink.400'}
                color={'white'}
                _hover={{
                  bg: 'pink.500',
                }}>
                Sign in
              </Button>
            </Stack>
            <span style={{textAlign:'center'}}>or</span>
            <Button
          w={'full'}
          maxW={'md'}
          variant={'outline'}
          leftIcon={<FcGoogle />}
          onClick={signInPopUp}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </form>
    </div>
    );
}

export default SignIn;