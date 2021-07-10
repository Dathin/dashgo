import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { error } from "console";
import { useMutation } from 'react-query'
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/dist/client/router";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Senha obrigatória").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisar ser iguais"),
});

export default function CreateUser() {

    const router = useRouter();

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
                created_at: new Date(),
            }
        });

        return response.data.user;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await createUser.mutateAsync(values);

    router.push('/users')
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" bg="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                error={formState.errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                type="email"
                error={formState.errors.email}
                label="E-mail"
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                error={formState.errors.password}
                label="Senha"
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                error={formState.errors.password_confirmation}
                type="password"
                label="Confirmação da senha"
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Link href="users" passHref>
                <Button
                  colorScheme="pink"
                  type="submit"
                  isLoading={formState.isSubmitted}
                >
                  Salvar
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
