import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import { Input } from "@/src/components/form/Input";
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from "react-hook-form";

type ValuesForms = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email Invalido'),
    password: yup.string().required('Senha obrigatória').min(6, 'A senha precisa ter no mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null as any], 'As senhas precisam ser iguais'),
})

export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm<ValuesForms>({
        resolver: yupResolver(createUserFormSchema)
    });

    const handleCreateUser: SubmitHandler<ValuesForms> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(values)
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />
                <Box
                    flex="1"
                    bg="gray.700"
                    borderRadius={8}
                    p={["6", "8"]}
                    as="form"
                    onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal">
                        Criar Usuário
                    </Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                nameItem="name"
                                label="Nome Completo:"
                                error={formState.errors.name}
                                {...register('name')} />
                            <Input
                                nameItem="email"
                                type="email"
                                label="Email:"
                                error={formState.errors.email}
                                {...register('email')} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                nameItem="password"
                                type="password"
                                label="Senha:"
                                error={formState.errors.password}
                                {...register('password')} />
                            <Input
                                nameItem="password_confirmation"
                                type="password"
                                label="Confirmação da Senha:"
                                error={formState.errors.password_confirmation}
                                {...register('password_confirmation')} />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users">
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}