import { Button, HStack, Box } from "@chakra-ui/react";
import React from "react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <HStack spacing="6" mt="8" justify="space-between" align="center">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">
                <PaginationItem isCurrent={true}>
                    1
                </PaginationItem>
                <PaginationItem>
                    2
                </PaginationItem>
                <PaginationItem>
                    3
                </PaginationItem>
                <PaginationItem>
                    4
                </PaginationItem>
            </HStack>
        </HStack>
    );
}