import { useContext, useRef } from 'react';

import { ButtonGroup, VStack, Input, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Button, IconButton, useDisclosure, Center,Heading } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const {currentUser,logout} = useContext(AuthContext);
  
  return (
    <>
        <IconButton variant='ghost' 
            icon={<FiMenu fontSize='1.35rem' />}
            aria-label='Open Menu'
            onClick={onOpen} ref={btnRef}
        />
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody px='1' mt='4'>
                <Center>
                    <VStack as='nav' spacing='8' alignItems='right'>
                    <Link to='/'>
          <Heading fontSize='3xl' color='pink.700'>Estatery</Heading>
        </Link>
                    <Link to='/'><Button variant='link'size='md'>home</Button></Link>
                    <Link to='/buy'><Button variant='link' size='md'>buy</Button></Link>
                    <Link to='/sell'><Button variant='link' size='md'>sell</Button></Link>
                    {
                currentUser ? (
                  
                  <Link to='/'><Button size='sm' variant='outline' onClick={() => logout()}>Logout</Button></Link>
                ) : (
                  <VStack as='nav' spacing='8' alignItems='right'>
                  <Link to='/signin'><Button size='sm' variant='outline'>Sign In</Button></Link> 
                  <Link to='/signup'><Button size='sm' variant='solid'>Register</Button></Link>
                  </VStack>
                )
              }
                
                    </VStack>
                    </Center>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default NavMobile