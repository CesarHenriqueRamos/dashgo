import { Box, Text, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";


interface PaginationProps {
    totalCountOfRegister: number;
    registerParPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCounts = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => {
        return from + index + 1
    }).filter(page => page > 0)
}

export function Pagination({
    totalCountOfRegister,
    registerParPage = 10,
    currentPage = 1,
    onPageChange
}: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRegister / registerParPage);
    const previusPages = currentPage > 1 ?
        generatePagesArray(currentPage - 1 - siblingsCounts, currentPage - 1)
        : [];
    const nextPages = currentPage < lastPage ?
        generatePagesArray(currentPage, Math.min(currentPage + siblingsCounts, lastPage))
        : [];
    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                {currentPage > (1 + siblingsCounts) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1} />
                        {currentPage > (2 + siblingsCounts) && (
                            <Text color="gray.300" w="8" textAlign="center">...</Text>
                        )}
                    </>
                )}

                {previusPages.length > 0 && previusPages.map(page => {
                    return (
                        <PaginationItem onPageChange={onPageChange} number={page} key={page} />
                    )
                })}

                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

                {nextPages.length > 0 && nextPages.map(page => {
                    return (
                        <PaginationItem onPageChange={onPageChange} number={page} key={page} />
                    )
                })}

                {(currentPage + siblingsCounts) < lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCounts) < lastPage && (
                            <Text color="gray.300" w="8" textAlign="center">...</Text>
                        )}
                        <PaginationItem onPageChange={onPageChange} number={lastPage} />
                    </>
                )}

            </Stack>
        </Stack>
    )
}