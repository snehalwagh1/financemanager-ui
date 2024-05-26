import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const AccountComponent = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await axios.get(`http://localhost:9010/account/fetchAllAccOfUser/${localStorage.getItem('userId')}`, {
        headers: { token: `${localStorage.getItem('token')}` , username: `${localStorage.getItem('username')}`}
      });
      setAccounts(response.data);
      console.log("account response: "+response.data);
    };

    fetchAccount();
  }, []);

  
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User Accounts
      </Typography>
      {accounts.length > 0 ? (
        <List>
          {accounts.map((account) => (
            <ListItem key={account.accountNumber}>
              <ListItemText 
                primary={`Account Number: ${account.accountNumber}`} 
                secondary={`Balance: ${account.balance}`} 
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="h6">
          No accounts available
        </Typography>
      )}
    </div>
  );
};

export default AccountComponent;