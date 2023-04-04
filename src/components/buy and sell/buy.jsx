
import Header from "../header/Header";
import Search from "../Search/Search";
import BuyHouseList from "./buyhouselist";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcPaid,
  FcDonate,
  FcSearch,
} from 'react-icons/fc';
import HouseList from "../Houses/HouseList";


const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};




function Buy(){
    
    return(
        <div>
        <Header/>
        <Box p={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        Bid to Buy.
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Make sure that your aware of  the bidding process 
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={50}>
        <Flex flexWrap="wrap" gridGap={19} justify="center">
          <Card
            heading={'Search'}
            icon={<Icon as={FcSearch} w={10} h={10} />}
            description={
              'Search for the property that suits your expectations and start bidding. '
            }
          />
          <Card
            heading={'Bid'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              'Your single bid is calculated by 10% of the current bid.You can bid many times within the deadline of the period.'
            }
          />
          <Card
            heading={'Buy'}
            icon={<Icon as={FcPaid} w={10} h={10} />}
            description={
              'Property will be won buy the person who bid the highest amount during the auction. '
            }
          />
        </Flex>
      </Container>
    </Box>
        <Search/>
        <BuyHouseList/>
        </div>
    );
}

export default Buy;