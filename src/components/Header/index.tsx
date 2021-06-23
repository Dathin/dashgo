import { Flex } from '@chakra-ui/react';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile'
import SearchBox from './SearchBox'
import Logo from './Logo'

export function Header(){
    return (
        <Flex as="header" w="100%" maxW={1480} h="20" mx="auto" mt="4" px="6" align="center">
            <Logo></Logo>
            <SearchBox></SearchBox>
            <Flex align="center" ml="auto">
                <NotificationsNav></NotificationsNav>
                <Profile></Profile>
            </Flex>
        </Flex>
    )
}