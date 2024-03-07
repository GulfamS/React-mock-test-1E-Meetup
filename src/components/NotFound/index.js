import {
  NotfoundContainer,
  NotfoundImage,
  NotfoundHeading,
  NotfoundDescription,
} from './styledComponent'

const NotFound = () => (
  <NotfoundContainer>
    <NotfoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotfoundHeading>Page Not Found</NotfoundHeading>
    <NotfoundDescription>
      We are sorry, the page you requested could not be found
    </NotfoundDescription>
  </NotfoundContainer>
)
export default NotFound
