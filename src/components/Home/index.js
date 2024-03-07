import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'

import {
  HomeContainer,
  HomeHeading,
  HomeDescription,
  RegisterButton,
  Image,
  Name,
  Topic,
} from './styledComponent'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)

        return (
          <div>
            <Header />
            {isRegistered === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomeDescription>Please register for the topic</HomeDescription>
                <Link to="/register">
                  <RegisterButton onClick={onRegister}>Register</RegisterButton>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default Home
