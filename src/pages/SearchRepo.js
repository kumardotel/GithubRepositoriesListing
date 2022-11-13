import React, {useState} from 'react'
import { Text, Box } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';
import { useSelector } from "react-redux";

const SearchRepo = () => {
    const githubState = useSelector((state) => state.githubReducer);
    const [username, setUsername] = useState("");
    const error = githubState.error;
    
    
  return (
    <Box p={5}>
        <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <SearchBar username={username} setUsername={setUsername}/>
        </Box>

        <Results/>
        
        {
          error && (
            <Text fontSize='sm' mt={5} color='tomato'>{error}</Text>
          )
        }
    </Box>
  )
}

export default SearchRepo