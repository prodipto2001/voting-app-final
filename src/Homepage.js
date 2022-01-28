import react, { useState }from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,  } from '@chakra-ui/react';
import './Homepage.css';
import Card from './Card';


function Homepage() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>

        <div className="Header">
            <h1>VOTING APP</h1>
            <Button
              size='md'
              marginLeft='120px'
              height='75px'
              width='323px'
              borderRadius = '50px'
              backgroundColor ='#FF8A00'
              onClick={onOpen}>
                CONNECT
            </Button>       
        </div>

        <div className='Body'>
            <Card userName={'Brown'} userPicture={'https://bit.ly/2Z4KKcF'}/>
            <Card userName={'Green'} userPicture={'https://bit.ly/2Z4KKcF'}/>
            <Card userName={'Blue'} userPicture={'https://bit.ly/2Z4KKcF'}/>
            <Card userName={'Orange'} userPicture={'https://bit.ly/2Z4KKcF'}/>
        </div>

        <Modal isOpen={isOpen} size= '6xl' onClose={onClose}>
          <ModalOverlay />

          <ModalContent>
          
          <ModalHeader>Log In</ModalHeader>
          
          <ModalCloseButton />
          
          <ModalBody>
          <FormControl>
              <FormLabel>USER ID</FormLabel>
                <Input id='userId' type='userId' />
                <FormHelperText>For e.g: 457857Ox</FormHelperText>
              </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button size='md'
              maxW='s'
              borderRadius = '50px'
              backgroundColor ='#FF8A00' 
              onClick={onClose}>
              CONNECT
            </Button>
          </ModalFooter>

          </ModalContent>
        </Modal>
    </div>
  );
}

export default Homepage;
