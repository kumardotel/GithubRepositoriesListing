import React from 'react'
import { Box, Text, HStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";

const RepoDetails = () => {
    const githubState = useSelector((state) => state.githubReducer);
    const reposInfo = githubState.reposInfo;
    const {id} = useParams();

    const foundRepo = reposInfo.find( (element) => {
        return element.id === parseInt(id);
      });

    const userGithubLink = `https://github.com/${foundRepo.owner.login}`
    
  return (
    <Box p= {5}>
        <Text>Owner name: <a style={{color: '#0000EE'}} href={userGithubLink} rel='noopener noreferrer'  target='_blank'>{foundRepo.owner.login}</a></Text>
        <Text>Repo name: <a style={{color: '#0000EE'}} href={foundRepo.clone_url} rel='noopener noreferrer'  target='_blank'>{foundRepo.name}</a></Text>
        <Text>Open issues: {foundRepo.open_issues}</Text>
        <Text mb={4}>Default branch: {foundRepo.default_branch}</Text>
        <Link to={`/`}> <HStack> <BiArrowBack/> <Text fontSize='sm'>Go Back</Text> </HStack> </Link>
    </Box>
  )
}

export default RepoDetails