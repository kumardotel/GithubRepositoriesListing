import React from 'react'
import { getRepoData } from '../redux/asyncActions/githubAction'
import {  useDispatch } from "react-redux";
import { Box, Input, Heading, Button, HStack } from '@chakra-ui/react';


const SearchBar = ({username, setUsername}) => {

  const dispatch = useDispatch();
  const onChange = (e) =>{
      setUsername(e.target.value)
  }
  const handleClick = () => {
    dispatch(getRepoData(username))
  }

  return (
    <Box>
      <Heading as='h3' mb={5} size='md'>
        Github Repositories Listing
      </Heading>
      <HStack>
        <Input 
              w={300}
              placeholder="Enter username"
              type="text" 
              onChange={(event) => {onChange(event)}}
              onKeyUp={(event) => {onChange(event)}}
              onPaste={(event) => {onChange(event)}}
          />
         <Button onClick={handleClick}>
          Search
        </Button>
      </HStack>

    </Box>
  )
}

export default SearchBar