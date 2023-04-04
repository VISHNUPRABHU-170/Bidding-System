import { Flex, Heading, Button,  HStack, chakra, ButtonGroup, useBreakpointValue, Divider } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const {currentUser,logout} = useContext(AuthContext)
  

  return (
    <chakra.header id="header" borderBottom='1px solid rgb(0,0,0,0.3)'>
      <Flex w='100%' py='5' align='center' justify='space-between'>
        <Link to='/'>
          <Heading fontSize='3xl' color='pink.700'>Estatery</Heading>
        </Link>
        {
          isDesktop ? (
          <>
            <ButtonGroup as='nav' variant='link' spacing='5'>
                <Link to='/'><Button fontSize='16px'>Home</Button></Link>
                <Link to='/buy'><Button fontSize='16px'>Buy</Button></Link>
                <Link to='/sell'><Button fontSize='16px'>Sell</Button></Link>
            </ButtonGroup>

            <HStack>
              {
                currentUser ? (
                  
                  <Link to='/'><Button size='sm' variant='outline' onClick={() => logout()}>Logout</Button></Link>
                ) : (
                  <HStack>
                  <Link to='/signin'><Button size='sm' variant='outline'>Sign In</Button></Link> 
                  <Link to='/signup'><Button size='sm' variant='solid'>Register</Button></Link>
                  </HStack>
                )
              }
              
             
            </HStack> 
          </>
           
          ) : (
            <NavMobile />
          )
        }
      </Flex>
      {/* <Divider color='pink.800' w={}='20px' />  */}
    </chakra.header>
  )
}

export default Header