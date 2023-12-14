import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const Dashboard = ({ orders }) => {
  return (
    <div>
      <h1>Star Bakery Dashboard</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Item Type</TableCell>
              <TableCell>Order State</TableCell>
              <TableCell>Last Update Time</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell>Customer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>{order.itemType}</TableCell>
                <TableCell>{order.orderState}</TableCell>
                <TableCell>{order.lastUpdateTime}</TableCell>
                <TableCell>{order.branch}</TableCell>
                <TableCell>{order.customer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
