import {
  Stack,
  VStack,
  Heading,
  Image,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { useFirestore } from "../../hooks/useFirestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const HouseDetails = () => {
  const data = useFirestore("auctions");
  const [info, setInfo] = useState(
    JSON.parse(localStorage.getItem("housedata"))
  );
  const { propertyId } = useParams();
  const { bidAuction ,currentUser,endAuction} = useContext(AuthContext);
  const searchedHouse = info.find((house) => house.id == propertyId);
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ md: "center" }}
        my="28px"
      >
        <Box>
        <Heading fontSize='22px'>{searchedHouse.title}</Heading>
          <Text fontSize='15px'>{searchedHouse.address}</Text>
        </Box>
        <HStack>
          <Text px="3" borderRadius="full" bg="green.300">
            {searchedHouse.type}
          </Text>
          <Text px="3" borderRadius="full" bg="purple.300">
            {searchedHouse.country}
          </Text>
        </HStack>
        <Text fontWeight="extrabold" fontSize="20px" color="pink.500">
          ${searchedHouse.curPrice}
        </Text>
      </Stack>
      <Stack
        direction={{ base:"column", lg: "row" }}
        gap="6"
      >
        <VStack align="centre" maxW="1040px">
          <Image src={searchedHouse.imgUrl} width="700px" height="400px" />
          <Stack
            py="10px"
            spacing={{ sm: "5", md: "10" }}
            direction={{ base: "column", md: "row" }}
          >
            <HStack>
              <BiBed style={{ color: "#D53F8C" }} />
              <Text fontSize="14px">{searchedHouse.bedrooms} Bedroom</Text>
            </HStack>
            <HStack>
              <BiBath style={{ color: "#D53F8C" }} />
              <Text fontSize="14px">{searchedHouse.bathrooms} Bathroom</Text>
            </HStack>
            <HStack>
              <BiArea style={{ color: "#D53F8C" }} />
              <Text fontSize="14px">{searchedHouse.surface}</Text>
            </HStack>
          </Stack>
          <Text> {searchedHouse.desc}</Text>
         
        </VStack>
        <Form searchedHouse={searchedHouse}/>
      </Stack>
      
    </>
  );
};

export default HouseDetails;
