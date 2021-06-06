import React from 'react'
import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';

const Apps = () => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div>
      <List>

        <ListItem button onClick={handleShow}>
          <ListItemIcon><AppsIcon style={{ color: 'Green' }} /></ListItemIcon>
          <ListItemText style={{ color: 'Green' }}>App</ListItemText>
        </ListItem>

        {show ? <>

          <ListItem button component={Link} to="/todoapp">
            <ListItemIcon><ArrowRightAltIcon style={{ color: 'red' }} /></ListItemIcon>
            <ListItemText style={{ color: 'red' }}>TodoApp</ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/weather">
            <ListItemIcon><ArrowRightAltIcon style={{ color: 'red' }} /></ListItemIcon>
            <ListItemText style={{ color: 'red' }}>Weather</ListItemText>
          </ListItem>

          <ListItem button component={Link} to="/corona">
            <ListItemIcon><ArrowRightAltIcon style={{ color: 'red' }} /></ListItemIcon>
            <ListItemText style={{ color: 'red' }}>CoronaApp</ListItemText>
          </ListItem>

        </> : null}

      </List>
    </div>
  )
}
export default Apps