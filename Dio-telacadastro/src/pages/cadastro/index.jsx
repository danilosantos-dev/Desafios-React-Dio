import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { FaUser, FaPhone } from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"

import { Container, Title, Column, TitleLogin, SubtitleLogin, TenhoConta, CriarText, Row, Wrapper, AceitarTermos,FazerLogin } from './styles';

const Login = () => {

    const { control, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });
   

    return (<>
        
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form >
                    
                    <Input  placeholder=" Nome completo" leftIcon={<FaUser/>}  name="nome"  control={control} />  
                    
                    {errors.nome && <span>Campo obrigatório</span>}
                    <Input type="email" placeholder=" Seu melhor @email" leftIcon={<MdEmail/>}   name="email" control={control} />
                    {errors.email && <span>Campo obrigatório</span>}
                    <Input type="phone" placeholder=" Celular ex:(11) 99617-6054" leftIcon={<FaPhone/>}  name="phone" control={control} />
                    {errors.email && <span>Campo obrigatório</span>}
                    <Input type="password" placeholder=" Senha"  name="senha" leftIcon={<RiLockPasswordFill/>} control={control} />
                    {errors.senha && <span>Campo obrigatório</span>}
                    <Button title="CRIAR MINHA CONTA GRÁTIS" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <CriarText>Ao clicar em "criar minha conta grátis", declaro que aceito as <AceitarTermos> Políticas de Privacidade</AceitarTermos> e os <AceitarTermos>Termos de Uso</AceitarTermos> da DIO.</CriarText>
                    
                </Row>
                    <TenhoConta>Já tenho conta. <FazerLogin>Fazer login</FazerLogin></TenhoConta>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }