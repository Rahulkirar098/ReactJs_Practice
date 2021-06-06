import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import React from 'react'
import { Link } from 'react-router-dom';

const Hooks = () => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div>
      <List>
        <ListItem button onClick={handleShow}>
          <ListItemIcon><ArrowDropDownCircleIcon style={{ color: 'Green' }} /></ListItemIcon>
          <ListItemText style={{ color: 'Green' }} >Hooks</ListItemText>
        </ListItem>

        {show ? <>

          <ListItem button component={Link} to="/usestate">
            <ListItemIcon><ArrowRightAltIcon style={{ color: 'red' }} /></ListItemIcon>
            <ListItemText style={{ color: 'red' }}>UseState</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/usestatearray">
            <ListItemIcon><ArrowRightAltIcon style={{ color: 'red' }} /></ListItemIcon>
            <ListItemText style={{ color: 'red' }}>UseStateArray</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/spread">
            <ListItemIcon><ArrowRightAltIcon style={{ color: 'red' }} /></ListItemIcon>
            <ListItemText style={{ color: 'red' }}>Spread</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/todo">
            <ListItemIcon><ArrowRightAltIcon style={{ color: 'red' }} /></ListItemIcon>
            <ListItemText style={{ color: 'red' }}>Todo</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/shortcircuit">
            <ListItemIcon><ArrowRightAltIcon style={{ color: 'red' }} /></ListItemIcon>
            <ListItemText style={{ color: 'red' }}>shortcircuit</ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/form">
            <ListItemIcon><ArrowRightAltIcon style={{ color: 'red' }} /></ListItemIcon>
            <ListItemText style={{ color: 'red' }}>Form</ListItemText>
          </ListItem>

        </> : null}

      </List>
    </div>
  )
}

export default Hooks
