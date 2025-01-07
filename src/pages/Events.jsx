import { Flex, Heading, Box, Input, InputGroup, InputRightAddon, Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { searchProducts } from '../services/productServices';
import { BsSearchHeart } from "react-icons/bs";
import { ItemListContainer } from "../components";

function onClick() {
  console.log("clicked");
}

export const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  //   useEffect(() => {
  //     // () => {} funcion anonima (this)
  //     console.log("Componente montado");
  //     document.addEventListener("click", onClick);

  //     // clean up function
  //     return () => {
  //       console.log("Componente desmontado");
  //       document.removeEventListener("click", onClick);
  //     };
  //   }, []);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    searchProducts(searchQuery).then((res) => {
      setProducts(res.data.products);
    });
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
  }

  return (
    <Flex flexDirection={"column"} width={"90%"} margin={"0 30px"}>
      <Heading size="2xl">Eventos</Heading>
      <br />
      <br />
      <Heading size="lg">Input</Heading>
      <br />
      <Flex>
        <InputGroup>
          <Input
            type="text"
            placeholder="Buscar producto por nombre..."
            onChange={handleChange}
          ></Input>
          <InputRightAddon onClick={handleSearch}>
            <BsSearchHeart />
          </InputRightAddon>
        </InputGroup>
      </Flex>
      <ItemListContainer products={products} />
      <br />
      <Divider />
      <br />
      <Heading size="lg">Mouse Event</Heading>
      <br />
      <Box
        position={isMouseEnter ? "absolute" : "relative"}
        height={isMouseEnter ? 600 : 200}
        width={isMouseEnter ? 600 : 200}
        border={"1px solid white"}
        onMouseEnter={() => {
          setIsMouseEnter(true);
        }}
        onMouseLeave={() => {
          setIsMouseEnter(false);
        }}
        bgColor={isMouseEnter ? "red" : "blue"}
        color={isMouseEnter ? "black" : "white"}
        cursor={isMouseEnter ? "zoom-in" : "pointer"}
      >
        {isMouseEnter ? "Mouse Enter" : "Mouse Leave"}
      </Box>
      <br />
      <Divider />
      <br />
      <Heading size="lg">Keyboard Event</Heading>
      <Box>
        <Input type="text" onKeyDown={handleKeyDown} />
      </Box>

    </Flex>
);
};