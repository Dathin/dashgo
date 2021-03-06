import { Text, Stack, HStack, Box } from "@chakra-ui/react";
import React from "react";
import { number } from "yup/lib/locale";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void
}


export function Pagination({totalCountOfRegisters, currentPage = 1, onPageChange, registersPerPage = 10}: PaginationProps) {
    
    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

    const siblingsCount = 1;

    const previousPages = currentPage > 1 
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : [];
    
    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : [];

    function generatePagesArray(from: number, to: number) {
        return [...new Array(to - from)].map((_, index) => from + index + 1)
        .filter(page => page > 0);
    }

    return (
        <Stack direction={["column", "row"]} spacing="6" mt="8" justify="space-between" align="center">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">

                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1} />
                        {currentPage > (2 + siblingsCount) && <Text color="gray.300" w="8" textAlign="center">...</Text>}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map((page: number) => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                })}

                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
            
                {nextPages.length > 0 && nextPages.map((page: number) => {
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                })}

                {currentPage + siblingsCount < lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastPage && <Text>...</Text>}
                        <PaginationItem onPageChange={onPageChange} number={lastPage} />
                    </>
                )}
            
            </HStack>
        </Stack>
    );
}