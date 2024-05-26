import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@mui/material';

const TransactionComponent = ({ username }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get(`/api/transactions/fetchTransactionsByUser/${username}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTransactions(response.data);
    };

    fetchTransactions();
  }, [username]);

  return (
    <List>
      {transactions.map(transaction => (
        <ListItem key={transaction.id}>
          <ListItemText primary={`Transaction ID: ${transaction.id}`} secondary={`Amount: ${transaction.amount}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default TransactionComponent;