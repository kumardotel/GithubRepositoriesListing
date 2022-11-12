import React, {useState} from 'react'
import { useSelector } from "react-redux";
import { Box, Flex } from '@chakra-ui/react';
import UserInfoCard from './RepoInfoCard';
import Pagination from './Pagination';

const Results = () => {
    const githubState = useSelector((state) => state.githubReducer);
    const reposInfo = githubState.reposInfo;
    const [currentPage, setCurrentPage] = useState(1)
    const [repoPerPage, setRepoPerPage] = useState(8)
    const lastRepoIndex = currentPage * repoPerPage;
    const firstRepoIndex = lastRepoIndex - repoPerPage; 
    const currentRepos = reposInfo.slice(firstRepoIndex, lastRepoIndex)
    
  return (
    <Box >
        {
            reposInfo && (
                <Box>
                <Flex flexWrap="wrap" direction="row"  justify="between">
                    {currentRepos.map((repo) => <UserInfoCard repo={repo} key={repo.id}/>)}
                </Flex>
                <Pagination totalRepos={reposInfo.length} repoPerPage={repoPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                </Box>
                
            )
        }
        
    </Box>
  )
}

export default Results