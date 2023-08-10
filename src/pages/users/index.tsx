import { Header } from "@/src/components/Header";
import { Pagination } from "@/src/components/Pagination";
import { Sidebar } from "@/src/components/Sidebar";
import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine } from 'react-icons/ri';
import { useQuery } from '@tanstack/react-query'


export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    const { data, isLoading, error } = useQuery({
        queryKey: ['users'], queryFn: async () => {
            const response = await fetch('http://localhost:3000/api/users');
            const data = await response.json();
            const users = data.users.map((user:any)=>{
                return{
                    id: user.id,
                    name:user.name,
                    email:user.email,
                    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR',{
                        day:'2-digit',
                        month:'long',
                        year:'numeric'
                    })
                }
            })
            return users;
        }
    })



    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />
                <Box
                    flex="1"
                    bg="gray.700"
                    borderRadius={8}
                    p="8">
                    <Flex
                        mb="8"
                        justify="space-between"
                        align="center">
                        <Heading
                            size="lg"
                            fontWeight="normal">
                            Usuários
                        </Heading>
                        <Link href="/users/create">
                            <Button
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>
                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex>
                            <Text>Falha ao obter os dados</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table
                                colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>
                                            Usuário
                                        </Th>
                                        {isWideVersion && (<Th>
                                            Data de Cadastro
                                        </Th>)}
                                        {/* <Th w="8"></Th> */}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map((user:any) => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">
                                                            {user.name}
                                                        </Text>
                                                        <Text fontSize="sm" color="gray.300">
                                                            {user.email}
                                                        </Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && (<Td>{user.createdAt}</Td>)}
                                                {/* <Td>
                                                    <Button
                                                        as="a"
                                                        size="sm"
                                                        fontSize="sm"
                                                        colorScheme="purple"
                                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                                                        Editar
                                                    </Button>
                                                </Td> */}
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination />
                        </>)}
                </Box>
            </Flex>
        </Box>
    )
}