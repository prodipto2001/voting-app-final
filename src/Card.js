import react from 'react';
import { Box, Image, Button} from '@chakra-ui/react' 

function Card( {userName, userPicture} ){
  const details = {
    imageUrl: userPicture,
    Name: userName,
  }

  return (
    <Box maxW='s' borderWidth='1px' borderRadius='20px' boxShadow='0px 4px 10px rgba(0, 0, 0, 0.25)' padding='20px' overflow='hidden' alignItems='center' display='flex' flexDirection='column'>
        
        <Image
        boxSize='300px'
        borderRadius='full'
        objectFit='cover'
        src={details.imageUrl}
        alt={details.Name}
        />

        <Box
          mt='3'
          fontWeight='bold'
          as='h2'
          lineHeight='tight'
          isTruncated
          fontSize='xl'
          
        >
          {details.Name}
        </Box>

        <Box display='flex' mt='2' justifyContent='center'>
            <Button size='md'
              height='75px'
              width='323px'
              borderRadius = '50px'
              backgroundColor ='#FF8A00' 
            >
              VOTE
            </Button>
        </Box>
        
    </Box>
  )
}

export default Card;