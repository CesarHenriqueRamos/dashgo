import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import { Input } from "@/src/components/form/Input";
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

export default function CreateUser(){
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
                    <Heading size="lg" fontWeight="normal">
                        Criar Usuário
                    </Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome Completo:" />
                            <Input name="email" type="email" label="Email:" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha:" />
                            <Input name="password_confirmation" type="password" label="Confirmação da Senha:" />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}