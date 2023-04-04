import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Form({searchedHouse}) {
  const {bidAuction,endAuction,currentUser} = useContext(AuthContext);
  return (
    <div style={{marginBottom:100}}>
    <Center>
      <Box
        maxW={'270px'}
        w={'400px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAAbFBMVEX6Z8L6Z8T8Zsb1a8C0iaD6ab70bb79Z8P6acH8Z8D7Z7z4acT6aMP6ZsT2acL7ZsHqc7bvbrvta8DqdMD/ZcX0abnzbMH3aMb/Y8L9ZMPfbbLmbbr0arf0y/DkvOPer9LSosLFmbi3jay7i7PAGFq9AAACx0lEQVR4nO3Vi26bMABAUdOM2DQG1i19ZO91//+Pa5KbgqHdsmlSJnGPigi2Meg2VcPbm/VqtV64u3fvw00dY9/HZdtuU7jt2zZ3uXoSRscgVNO5cqSazU+GpiPTrYbtXtsqzLYK573ZK4+ZbbXbhtA8bHN316VFy3EdmuaqqbsuLFvfhdS3zfXm0i/yHzAEDHGQDHFkiKNoCGRDHPmNgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGgCFgCBgChoAhYAgYAoaAIWAIGAKGQA4pX8XrfOn3uLRqE9L99qFpQ9/H+HRwOnyMMZ6uytPocr9mrxicb/U8MR08PqQ/bVWuGS3ti4/zwemjyq368chLW8X2PnT3sWk26dK/kn/pz7/fMW5C08brOoWcqzwcBQYnc+csnc1P7q2mW032L5eWky8/qirvnl3M3+qwR2hSaK5iXadcLVqou6cQu9TlVP+FxDGczl0+nxg+/m7JuY/51S1p+rGJIbVV111Vz39dOe9/Tkc+XZYTh6V5PJ+Hif3YcEdx1/hUbjxemodnPF8Vb1Xe/NLG87eabzVak9IurLv9f9CFa/td+PDx9tNtvVq29adV+Pzl67fvj28W7vHHTwkgekKB123xAAAAAElFTkSuQmCC'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {searchedHouse.agentname}
            </Heading>
            <Text color={'gray.500'}>{searchedHouse.agentnumber}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{searchedHouse.surface}sq.ft</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Square feet
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>${searchedHouse.curPrice}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Current Price
              </Text>
            </Stack>
          </Stack>
          {!currentUser ? (
            <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('pink.500', 'pink')}
            color={'white'}
            onClick={() => alert("Please login to bid")}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Bid
          </Button>
                
              ) : searchedHouse.email === currentUser.email ? (
                <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('pink.500', 'pink')}
            color={'white'}
            onClick={() => endAuction(searchedHouse.id)}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Cancel Auction
          </Button>
              ) : (
                <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('pink.500', 'pink')}
            color={'white'}
            onClick={() => bidAuction(searchedHouse.id, searchedHouse.curPrice)}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Bid
          </Button>
              )}
        </Box>
      </Box>
    </Center>
    </div>
  );
}