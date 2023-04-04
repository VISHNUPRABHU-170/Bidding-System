import { AuthProvider } from "../../context/AuthContext";
import { AuctionBody } from "../auctions/Body";
import Header from "../header/Header";
import SellHouseList from "./sellhouselist";
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
    FcHome,
    FcAreaChart,
    FcDebt
  } from 'react-icons/fc';
  

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


function Sell(){
    return(
        <div>
        <Header/>
        <Box p={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        Value For Your Valuables.
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Read the below process to understand the selling process.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={50}>
        <Flex flexWrap="wrap" gridGap={19} justify="center">
          <Card
            heading={'Upload'}
            icon={<Icon as={FcHome} w={10} h={10} />}
            description={
              'Post your property with the neccessary details and set the auction timing before posting it .'
            }
          />
          <Card
            heading={'Wait'}
            icon={<Icon as={FcAreaChart} w={10} h={10} />}
            description={
              'You have to wait untill the process completes.The highest bid will be calculated at the end of the time'
            }
          />
          <Card
            heading={'Get Paid'}
            icon={<Icon as={FcDebt} w={10} h={10} />}
            description={
              'The highest bidded amount by the buyer is declared as the winner at the end of the time.'
            }
          />
        </Flex>
      </Container>
    </Box>
        <AuthProvider>
            <AuctionBody/>
        </AuthProvider>
        <SellHouseList/>
        </div>
    );
}

export default Sell;