import {Button} from '@chakra-ui/react'

interface PaginationItemProps {
    isCurrent?: boolean;
    children: string;
}

export function PaginationItem({isCurrent, children}: PaginationItemProps){
    return isCurrent ? (
        <Button size="sm" fontSize="xs" w="4" colorScheme="pink" disabled _disabled={{
            bgColor: 'pink.500',
            cursor: 'default'
        }}>
            {children}
        </Button>
    ) : (
        <Button size="sm" fontSize="xs" w="4" bgColor="gray.700" _hover={{
            bgColor: 'gray.500'
        }}>
            {children}
        </Button>
    )
}