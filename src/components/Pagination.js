import React from 'react'
import { Box, Button } from '@chakra-ui/react';
 
const Pagination = ({totalRepos, repoPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    for(let i = 1; i<= Math.ceil(totalRepos/repoPerPage); i++){
        pages.push(i)
    }
  return (
    <Box style={{display: 'flex', justifyContent: 'center', gap: 10}}>
        {
            pages.map((page, index) => {
                return <Button size='sm' bg={page == currentPage ? 'gray':'lightGray' } key={index} onClick={() => setCurrentPage(page)}>{page}</Button>
            })
        }
    </Box>
  )
}

export default Pagination