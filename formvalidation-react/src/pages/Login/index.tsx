
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import {defaultValues, IFormLogin} from './types';
import { isDisabled } from "@testing-library/user-event/dist/utils";

const schema = yup.object({
  email: yup
  .string()
  .email('E-mail invalido')
  .required('Campo obrigatorio'),
  password: yup
  .string()
  .required('Campo obrigatorio')
  .min(6, 'Digite no minimo 6 caracteres')
  
}).required();


const Login = () => {

  const { control, formState: {errors , isValid
  }} = useForm<IFormLogin>({
    resolver : yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
    reValidateMode: 'onChange'
  });

  

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input 
          type="email"
          name="email"
          placeholder="Email" 
          control={control}
          errorMessage={errors?.email?.message}     
          />
          <Spacing />
          <Input
            type="password"
            name="password"
            placeholder="Senha" 
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar"  />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
