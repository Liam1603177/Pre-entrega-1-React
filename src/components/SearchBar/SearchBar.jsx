import { Flex, Input, InputGroup, InputRightAddon, } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { BsSearchHeart } from 'react-icons/bs';
import { searchProducts } from '../../services/productServices';

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearch = () => {
      searchProducts(searchQuery).then((res) => {
        console.log(res);
      });
    };
  

  return (
    <Flex>
        <InputGroup>
        <Input type='text' placeholder='Buscar producto' onChange={handleChange}></Input>
        <InputRightAddon onClick={handleSearch}><BsSearchHeart /></InputRightAddon>
        </InputGroup>
        </Flex>
  );
};
