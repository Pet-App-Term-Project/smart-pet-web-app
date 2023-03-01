import { useState } from 'react'

import { SimpleGrid, Box } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (
<SimpleGrid columns={2} spacing={10}>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
  )
}

export default App
