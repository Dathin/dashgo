import { Flex, Icon, useBreakpointValue, IconButton } from '@chakra-ui/react';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile'
import SearchBox from './SearchBox'
import Logo from './Logo'
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header(){
    const { onOpen } = useSideBarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex as="header" w="100%" maxW={1480} h="20" mx="auto" mt="4" px="6" align="center">
            { !isWideVersion && (
                <IconButton icon={<Icon as={RiMenuLine} />} fontSize="24" variant="unstyled" onClick={onOpen} aria-label="Open navigation" mr="2" />
            )} <Logo></Logo>
            {isWideVersion && <SearchBox></SearchBox>}
            <Flex align="center" ml="auto">
                <NotificationsNav></NotificationsNav>
                <Profile showProfileData={isWideVersion}></Profile>
            </Flex>
        </Flex>
    )
}