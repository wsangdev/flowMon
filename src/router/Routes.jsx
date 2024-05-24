import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CuentasPage from '../modules/Cuentas/CuentasPage';
import PresupuestosPage from '../modules/Presupuestos/PresupuestosPage';
import TransactionPage from '../modules/Transactions/TransactionPage';
import HomePage from '../layouts/HomePage';
import LoginPage from '../layouts/LoginPage';
import TarjetPage from '../modules/Tarjets/TarjetPage';


export function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Paginas Iniciales  */}
        <Route path='/home' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />

        {/* Cuentas Dentro de la Pagina */}
        <Route path='/cuentas' element={<CuentasPage/>} />
        <Route path='/presupuestos' element={<PresupuestosPage/>} />
        <Route path='/transactions' element={<TransactionPage/>} />
        <Route path='/tarjets' element={<TarjetPage/>} />
      </Routes>
    </Router>
  )
}