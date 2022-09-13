import Container from 'react-bootstrap/Container'
import { getRandomDadJokes } from '../services/DadJokesAPI'

const RandomDadJokePage = () => {

    getRandomDadJokes()
    
    return (
        <Container className="py-3">
            RandomDadJokePage
        </Container>
    )
}

export default RandomDadJokePage