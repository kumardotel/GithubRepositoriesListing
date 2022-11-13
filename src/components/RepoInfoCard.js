import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react';
import { BiUser } from "react-icons/bi";
import { AiOutlineFork } from "react-icons/ai";
import { BsStar, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";


const RepoInfoCard = ({repo}) => {
  return (
    <Box width={280} m={5} p={2} px={3} borderWidth={1} borderColor="#F3EEF4" borderRadius={5}>
      <Text fontSize={20} mb={2}>
      <Link to={`/repo-details/${repo.id}`}>{repo.name}</Link>
      </Text>
      
      <HStack><BiUser/><Text> {repo.owner.login}</Text></HStack>
      <HStack mt={1}>
        <HStack><BsStar/><Text>{repo.stargazers_count}</Text></HStack>
        <HStack><BsEye/><Text>{repo.watchers}</Text></HStack>
        <HStack><AiOutlineFork/><Text>{repo.forks_count}</Text></HStack>
      </HStack>
      <Text fontSize='sm' mt={1}>{repo.description}</Text>
      <Text fontSize='xs' mt={2}>{repo.updated_at}</Text>
    </Box>
  )
}





export default RepoInfoCard