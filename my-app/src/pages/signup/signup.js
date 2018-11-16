import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container'

// function Signup(){
//     return (

//     )
// }

class Signup extends React.Component{
    constructor(){
    super()
        this.state = { disabled : true }
        this.name = React.createRef()
        this.email = React.createRef()
        this.phone = React.createRef()
        this.password = React.createRef()
    }

    onDisabledButton = () => {
        const inputName = this.name.current
        const inputMail = this.email.current
        const inputPhone = this.phone.current
        const inputPassword = this.password.current

        if(inputName.hasError() || inputMail.hasError() || inputPhone.hasError() || inputPassword.hasError()){
            this.setState({ disabled : true})
        }else{
            this.setState({ disabled : false})
        }
    }
    
    render(){
        return(
            <Container>
                <Form title='Faça Seu Cadastro' text='Preencha com Seus Dados'>
                    <Form.Label htmlFor='name'>Nome:</Form.Label>
                    <Form.Input ref={this.name} id='name' type='text' onChange={this.onDisabledButton}/>
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Input ref={this.email} id='email' type='email' onChange={this.onDisabledButton}/>
                    <Form.Label htmlFor='phone'>Telefone:</Form.Label>
                    <Form.Input ref={this.phone} id='phone' type='tel' onChange={this.onDisabledButton} />
                    <Form.Label htmlFor='password'>Senha:</Form.Label>
                    <Form.Input ref={this.password} id='password' type='password' onChange={this.onDisabledButton} minLength={6} required/> 
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='/login'>Fazer Login</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Signup