import React,{useState} from 'react'
import {Flex,Heading,Input,Textarea,FormControl,FormErrorMessage,FormHelperText,FormLabel,Image} from "@chakra-ui/react"
import {  useToast,Button,Box} from "@chakra-ui/react"

const Contact = () => {
 
  const [data, setData] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
   
    
  })
  const toast = useToast()
  const handleInputChange = (e) =>{
    const{name,value}=e.target
    setData({...data,[name]:value})
  } 
  const isError = data.name||data.email === ''
  const {name,email,subject,message}=data

  const HandleSubmit=()=>{
    if(name===''||email===''||message===''||subject ===""){
      alert("fill all data")
      return
    }
  
    toast({
      title: 'Message Recieved',
      description: "We will contact you soon .",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    setData({
      name:"",
      email:"",
      subject:"",
      message:""
     
    })
  }
 
  return (
    <>
    <Heading textAlign="center" m={20}>Contact Me</Heading>
    <Flex justifyContent='space-around'direction={{base:"column",lg:"row"}} pl={10} pr={10} alignItems="center" >

      <Flex gap={3} direction="column">
        <Heading as="h5" size="lg">
        Have a web design project in mind?
        </Heading>
        <Heading as="h5" size="lg">
        Let's discuss it over a coffee!
        </Heading>
        <Image src="https://raw.githubusercontent.com/OpenClassrooms-Student-Center/bootstrap-5-EN/main/yourProfile/img/grab-a-coffee.jpg" alt="img" w="500px"m={5}/>
      </Flex>
      
      <Box>

    <Flex gap={4} direction="column">

     <FormControl isInvalid={isError}>
      <FormLabel>Full Nmae</FormLabel>
      <Input type='text' value={name} onChange={handleInputChange} placeholder="Name" name="name" />
      {!isError ? (
        <FormHelperText>
         Enter the full name
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={email} onChange={handleInputChange} placeholder="Email" name="email"/>
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={isError}>
    <FormLabel>Subject</FormLabel>
      <Input type='text' value={subject} onChange={handleInputChange} placeholder="Subject" name="subject"/>
     
    </FormControl>
    <FormControl isInvalid={isError}>
    <FormLabel>Message</FormLabel>
      <Textarea type='text' value={message} onChange={handleInputChange} placeholder="Message.." name="message"/>
     
    </FormControl>
    
  <Button backgroundColor='#92bcb5' onClick={HandleSubmit}>Submit</Button>
      </Flex>
      </Box>
    </Flex>
  
  </>
  )
}

export default Contact