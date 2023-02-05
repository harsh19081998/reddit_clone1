import { Button, Flex, Image, Input } from '@chakra-ui/react';
import React from 'react';
import Directory from './Directory';
import RightContent from './RightContent';
import SearchInput from './SearchInput';


const Navbar:React.FC = () => {
    
    return(
        <Flex height="44px" bg='white' padding="6px 12px">
            <Flex align="center" width={{ base: "40px", md: "auto" }} mr={{ base: 0, md: 2 }}>
                <Image src='/images/redditFace.svg' height="30px"/>
                <Image src='/images/redditText.svg' height="46px" display={{ base:'none' ,md:'unset' }}/>
            </Flex>
            {//<Directory/>
            }<SearchInput user={null}/>
            <RightContent/> 
            
        </Flex>
    )
}
export default Navbar;