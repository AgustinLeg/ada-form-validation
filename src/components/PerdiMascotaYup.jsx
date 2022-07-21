import {
  Button,
  FormControl,
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
import { useState } from "react";
import { date } from "yup";

import { object, string } from "yup";

const PetSchema = object({
  nombre: string().required(),
  descripcion: string().required().min(5),
  fecha: date().min(new Date("2022-01-01")).max(new Date()).required(),
});

export const PerdiMascotaYup = () => {
  const [values, setValues] = useState({
    nombre: "",
    descripcion: "",
    fecha: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    PetSchema.validate(values)
      .then((res) => {
        console.log("PASO", res);
      })
      .catch((err) => console.log("ERROR", err));
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Stack justify="center" align="center">
      <Heading>Perdi a mi mascota</Heading>
      <Text>Llena este formulario para publicarla en nuestra web</Text>
      <form onSubmit={handleSubmit}>
        <VStack spacing={10} mt={20}>
          {/* Nombre */}
          <FormControl>
            <FormLabel htmlFor="pet-name">Nombre de la mascota</FormLabel>
            <Input
              id="pet-name"
              placeholder="Scooby"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
            />
          </FormControl>
          {/* Especie */}
          <FormControl>
            <FormLabel htmlFor="pet-species">Especie de la mascota</FormLabel>
            <Select>
              <option value="">Selecciona una opcion</option>
              <option value="perro">perro</option>
              <option value="gato">gato</option>
              <option value="otro">otro</option>
            </Select>
          </FormControl>
          {/* Sexo */}
          <FormControl>
            <FormLabel htmlFor="pet-gender">Sexo de la mascota</FormLabel>
            <RadioGroup>
              <HStack spacing="24px">
                <Radio>Macho</Radio>
                <Radio>Hembra</Radio>
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
              <Input
                id="pet-date"
                placeholder="Scooby"
                type="date"
                name="fecha"
                value={values.fecha}
                onChange={handleChange}
              />
            </FormControl>
          </SimpleGrid>
          <FormControl>
            <FormLabel htmlFor="pet-description">Descripcion </FormLabel>
            <Textarea
              id="pet-description"
              placeholder="Scooby"
              name="descripcion"
              value={values.descripcion}
              onChange={handleChange}
              maxLength={300}
            />
          </FormControl>
          <Button type="submit">Enviar</Button>
        </VStack>
      </form>
    </Stack>
  );
};
