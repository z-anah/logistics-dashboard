import * as React from 'react';
import VehicleListTable from './components/VehicleListTable';
import { vehicles } from '@/data/vehicles';

export default function VehicleList() {
  return <VehicleListTable vehicles={vehicles} />;
}
