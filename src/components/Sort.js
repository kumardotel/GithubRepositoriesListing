import React from 'react'
import { Select } from '@chakra-ui/react'


const Sort = () => {

    const sortResult = (e) => {
        console.log(e.target.value)
    }

  return (
    <Select w={200} onChange={sortResult} size='sm'  placeholder='Sort by'>
    <option value='option1'>Option 1</option>
    <option value='option2'>Option 2</option>
    <option value='option3'>Option 3</option>
  </Select>
  )
}

export default Sort