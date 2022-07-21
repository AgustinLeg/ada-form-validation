import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export const PerdiMascotaHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enviarFormulario = (data) => {
    console.log(data)
    alert("PASO VALIDACION");
  };

  return (
    <Stack justify="center" align="center">
      <Heading>Perdi a mi mascota</Heading>
      <Text>Llena este formulario para publicarla en nuestra web</Text>
      <form onSubmit={handleSubmit(enviarFormulario)}>
        <VStack spacing={10} mt={20}>
          {/* Nombre */}
          <FormControl isInvalid={errors.nombre}>
            <FormLabel htmlFor="pet-name">Nombre de la mascota</FormLabel>
            <Input
              id="pet-name"
              placeholder="Scooby"
              {...register("nombre", {
                required: "Este campo es requerido",
                minLength: {
                  value: 5,
                  message: "Minimo 5 caracteres",
                },
              })}
            />
            {errors.nombre && (
              <FormErrorMessage>{errors?.nombre.message}</FormErrorMessage>
            )}
          </FormControl>
          {/* Email  */}
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="pet-email">Email de la mascota</FormLabel>
            <Input
              id="pet-email"
              placeholder="Scooby"
              {...register("email", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Este email no es valido",
                },
              })}
            />
            {errors.email && (
              <FormErrorMessage>{errors?.email.message}</FormErrorMessage>
            )}
          </FormControl>
          {/* Especie */}
          <FormControl isInvalid={errors.especie}>
            <FormLabel htmlFor="pet-species">Especie de la mascota</FormLabel>
            <Select
              {...register("especie", {
                required: "Este campo es requerido",
              })}
            >
              <option value="">Selecciona una opcion</option>
              <option value="perro">perro</option>
              <option value="gato">gato</option>
              <option value="otro">otro</option>
            </Select>
            {errors.especie && (
              <FormErrorMessage>{errors?.especie.message}</FormErrorMessage>
            )}
          </FormControl>
          {/* Sexo */}
          <FormControl isInvalid={errors.sexo}>
            <FormLabel htmlFor="pet-gender">Sexo de la mascota</FormLabel>
            <RadioGroup>
              <HStack spacing="24px">
                <Radio
                  {...register("sexo", { required: "Este campo es requerido" })}
                >
                  Macho
                </Radio>
                <Radio
                  {...register("sexo", { required: "Este campo es requerido" })}
                >
                  Hembra
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          {/* Raza */}
          <FormControl>
            <FormLabel htmlFor="pet-breed">Raza de la mascota</FormLabel>
            <Input id="pet-breed" placeholder="Scooby" />
          </FormControl>
          {/* Fecha y ubicacion */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} w="full" gap={5}>
            <FormControl>
              <FormLabel htmlFor="pet-date">Fecha de ultimo visto</FormLabel>
              <Input id="pet-date" placeholder="Scooby" type="date" />
            </FormControl>
          </SimpleGrid>
          <FormControl isInvalid={errors.descripcion}>
            <FormLabel htmlFor="pet-description">Descripcion </FormLabel>
            <Textarea
              id="pet-description"
              placeholder="Scooby"
              maxLength={300}
              {...register("descripcion", {
                required: "Este campo es requerido",
              })}
            />
          </FormControl>
          <Button type="submit">Enviar</Button>
        </VStack>
      </form>
    </Stack>
  );
};
