import React from 'react';
import './style.css';
import { DataTableFilterDemo } from './functions/DataTableFilterDemo';
import { Navbar } from './shared/Navbar';
import { Search } from './shared/Search';

export default function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <DataTableFilterDemo />
    </div>
  );
}
