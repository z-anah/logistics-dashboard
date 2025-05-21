import * as React from 'react';
import DriverListTable from './components/DriverListTable';
import { drivers } from '@/data/drivers';

export default function DriverList() {
  return <DriverListTable drivers={drivers} />;
}
