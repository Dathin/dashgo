import { Flex, useBreakpointValue } from '@chakra-ui/react';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile'
import SearchBox from './SearchBox'
import Logo from './Logo'

export function Header(){

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex as="header" w="100%" maxW={1480} h="20" mx="auto" mt="4" px="6" align="center">
            <Logo></Logo>
            {isWideVersion && <SearchBox></SearchBox>}
            <Flex align="center" ml="auto">
                <NotificationsNav></NotificationsNav>
                <Profile showProfileData={isWideVersion}></Profile>
            </Flex>
        </Flex>
    )
}