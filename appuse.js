import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from './actions/orderActions';
import Dashboard from './components/Dashboard';

function App() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="App">
      <Dashboard orders={orders} />
    </div>
  );
}

export default App;
