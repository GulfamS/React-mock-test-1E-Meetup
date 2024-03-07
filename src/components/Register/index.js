import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  RegisterImage,
  RegistrationForm,
  RegistrationHeading,
  Label,
  Input,
  Select,
  RegistrationButton,
  ErrorMsg,
} from './styledComponent'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <div>
            <RegisterContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RegistrationForm onSubmit={submitRegistration}>
                <RegistrationHeading>Let us join</RegistrationHeading>
                <Label htmlFor="name">NAME</Label>
                <Input
                  type="text"
                  onChange={onChangeName}
                  id="name"
                  value={name}
                  placeholder="Your name"
                />
                <Label htmlFor="topic">TOPICS</Label>
                <Select onChange={onChangeTopic} value={topic} id="topic">
                  {topicsList.map(eachTopic => (
                    <option key={eachTopic.id} value={eachTopic.id}>
                      {eachTopic.displayText}
                    </option>
                  ))}
                </Select>
                <RegistrationButton type="submit">
                  Register Now
                </RegistrationButton>
                {showError === true ? (
                  <ErrorMsg>Please enter your name</ErrorMsg>
                ) : (
                  ''
                )}
              </RegistrationForm>
            </RegisterContainer>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)
export default Register
