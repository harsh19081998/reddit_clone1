import { Button, Flex, Image, Input } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';


const Navbar:React.FC = () => {
    
    return(
        <Flex bg='white' padding="6px 10px">
            <Flex align="center">
                <Image src='/images/redditFace.svg' height="30px"/>
                <Image src='/images/redditText.svg' height="46px" display={{ base:'none' ,md:'unset' }}/>
            </Flex>
            {//<Directory
            <SearchInput/>
            //<RightContent/> 
            }
        </Flex>
    )
}
export default Navbar;