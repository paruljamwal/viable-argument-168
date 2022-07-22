import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
  import React from 'react'
  import { useDisclosure } from '@chakra-ui/react'
  import { AiOutlinePlusCircle } from "react-icons/ai"


const  InitialFocus=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
      <AiOutlinePlusCircle size={"55px"} onClick={onOpen}/>
     
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Task Name</FormLabel>
                <Input ref={initialRef} placeholder='Task Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Projects</FormLabel>
                <Input placeholder='Projects' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
          
              <Button onClick={onClose}>Add task</Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default InitialFocus