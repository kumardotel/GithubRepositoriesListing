import React from 'react'
import { Select } from '@chakra-ui/react'


const Sort = () => {

    const sortResult = (e) => {
        console.log(e.target.value)
    }

  return (
    <Select w={200} onChange={sortResult} size='sm'  placeholder='Sort by'>
    <option value='stars'>Stars</option>
    <option value='watchers'>Watchers</option>
    <option value='forks'>Forks</option>
  </Select>
  )
}

export default Sort