import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useQuery } from 'react-query';

export default function UserList(){

    const {data, isLoading, error} = useQuery('users1', async () => {
        const response = await fetch('http://localhost:3000/api/users');
        return await response.json()
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {
        
    }, [])

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">

                    
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon fontSize="20" as={RiAddLine}/>}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    { isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                        <Checkbox colorScheme="pink" />
                                    </Th>
                                    <Th>
                                        Usuário
                                    </Th>
                                    { isWideVersion && (<Th>
                                        Data de cadastro
                                    </Th>)}
                                    <Th w="8">
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td px={["4", "4", "6"]}>
                                        <Checkbox colorScheme="pink" />  
                                    </Td>
                                    <Td>
                                        <Box>
                                            <Text fontWeight="bold">Pedro Caires</Text>
                                            <Text fontSize="sm" color="gray.300">pedromcaires99@gmail.com</Text>
                                        </Box> 
                                    </Td>
                                    { isWideVersion && (
                                        <Td>
                                            27/07/2021
                                        </Td>
                                    )}
                                    <Td>
                                        <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon fontSize="16" as={RiPencilLine}/>}>{isWideVersion ? 'Editar' : ''}</Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>

                        <Pagination />
                    </>
                    ) }

                    
                </Box>
            </Flex>
        </Box>
    )
}