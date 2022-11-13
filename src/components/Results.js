import React, {useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, Select, Spinner } from '@chakra-ui/react';
import UserInfoCard from './RepoInfoCard';
import Pagination from './Pagination';

import { addRepoInfo } from '../redux/slices/githubSlice';

const Results = () => {
    const githubState = useSelector((state) => state.githubReducer);
    const reposInfo = githubState.reposInfo;
    const loading = githubState.isLoading;
    const [currentPage, setCurrentPage] = useState(1)
    const repoPerPage = 8;
    const lastRepoIndex = currentPage * repoPerPage;
    const firstRepoIndex = lastRepoIndex - repoPerPage; 
    const currentRepos = reposInfo.slice(firstRepoIndex, lastRepoIndex)
    
    const dispatch = useDispatch()

    const sortResult = (e) => {
        
        var arrayForSort = [...reposInfo]
        if(e.target.value === 'stars'){
            arrayForSort.sort((a, b) => b.stargazers_count - a.stargazers_count);
        }else if(e.target.value === 'watchers'){
            arrayForSort.sort((a, b) => b.watchers - a.watchers);
        }else if(e.target.value === 'forks'){
            arrayForSort.sort((a, b) => b.forks_count - a.forks_count);
        }
        dispatch(addRepoInfo(arrayForSort))
    }

  return (
    <Box >
        {
            reposInfo && (
                <Box>
                    <Box style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Select onChange={sortResult} w={200} size='sm'  placeholder='Sort by'>
                            <option value='stars'>Stars</option>
                            <option value='watchers'>Watchers</option>
                            <option value='forks'>Forks</option>
                        </Select>
                    </Box>
                    
                    <Flex flexWrap="wrap" direction="row"  justify="between">
                        {currentRepos.map((repo) => <UserInfoCard repo={repo} key={repo.id}/>)}
                    </Flex>
                    <Pagination totalRepos={reposInfo.length} repoPerPage={repoPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                   
                </Box>
            )
        }
        {
            loading && (
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                />
            )
        }
    </Box>
  )
}

export default Results