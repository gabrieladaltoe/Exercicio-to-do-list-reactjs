import React from 'react'
import Container from '../../components/container'
import './pageNotFound.css'
import NotFoundImage from './not-found.png'

function PageNotFound() {
   return (
       <Container>
            <div className='page-not-found'>
                <h1>Erro 404</h1>
                <p>Página não encontrada</p>
                <img src={NotFoundImage}  className='page-not-found__image' alt='page-not-found'/>
            </div>
       </Container>
    )
}

export default PageNotFound


