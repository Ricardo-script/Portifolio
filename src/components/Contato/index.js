import React from 'react';
import emailjs from 'emailjs-com';
import { Container, Header,Content } from './styles';
import email from '../../assets/jobs/email.png';
import linkedin from '../../assets/jobs/linkedin.png';
import facebook from '../../assets/jobs/facebook.png';

export default function Contato(){

    function sendMessage(e){
        e.preventDefault();

        emailjs.sendForm('portifolioMessage', 'template_yay474q', e.target, 'user_fl2DzoP3KmDSNmyvJjKTb')
        .then((result) => {
            //console.log(result.text);
            alert('Mensagem enviada com sucesso!');
        }, (error) => {
            //console.log(error.text);
            alert(error.message)
        });
        e.target.reset();
    }

    return(
        <Container id='contato'>
            <Header>
                <div class='line' id="servicos"></div>
                <h2>Contato</h2>
            </Header>
            <Content>
                <div className='contact'>
                    <div className='box'>
                        <h3>Envie um email para <span>teixeira.rcd@gmail.com</span> </h3>
                        <h4>... ou acesse algumas de minhas redes sociais</h4>
                    </div>
                    <div className='redes'>
                        <div className='card'>
                            <img src={email} alt="e-mail" />
                        </div>
                        <div className='card'>
                            <img src={linkedin} alt="e-mail" />
                        </div>
                        <div className='card'>
                            <img src={facebook} alt="e-mail" />
                        </div>
                    </div>
                    <div class='info'>
                        <h3>Você também pode me enviar uma mensagem, responderei assim que possível.</h3>
                    </div>
                </div>
                <div className='message'>
                    <form onSubmit={sendMessage}>
                        <label>
                            Nome:
                            <input type="text" name='name' required/>
                        </label>
                        <label>
                            Email:
                            <input type="email" name='email'required/>
                        </label>
                        <div className='msg-btn'>
                            <label>
                                Mensagem:
                                <textarea cols="30" rows="10" name='message' required></textarea>
                            </label>
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
            </Content>
        </Container>
    );
}