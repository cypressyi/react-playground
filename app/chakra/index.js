import { ChakraProvider, Button } from '@chakra-ui/react'

export default function index() {
  return (
    <ChakraProvider>
      <Button>Button</Button>
    </ChakraProvider>
  )
}
