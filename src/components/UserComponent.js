import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const UserComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:9010/user/fetchUserWithUsername/${localStorage.getItem('username')}`, {
        headers: { token: `${localStorage.getItem('token')}` , username: `${localStorage.getItem('username')}`}
      });
      localStorage.setItem('userId', response.data.userId);
      setUser(response.data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user && (
        <List>
          <ListItem>
            <ListItemText primary="Username" secondary={user.username} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={user.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Account Number" secondary={user.accountId} />
          </ListItem>
        </List>
      )}
    </div>
  );
};

export default UserComponent;