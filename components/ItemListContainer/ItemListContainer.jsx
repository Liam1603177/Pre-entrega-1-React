import { Flex } from "@chakra-ui/react";
const ItemListContainer = ({ greenting }) => {

    return (
        <Flex
        alignItems={"center"}
        justifyContent= {"center"}
        height= {"90vh"}
        fontSize={"2rem"}>
            
            {greenting}
        </Flex>
    );
};

export default ItemListContainer;