import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function Profile(){
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Pedro Caires</Text>
            <Text color="gray.300" fontSize="small">pedromcaires99@gmail.com</Text>
        </Box>
        <Avatar size="md" name="Pedro Caires" src="https://github.com/Dathin.png"/>
    </Flex>
    )
}