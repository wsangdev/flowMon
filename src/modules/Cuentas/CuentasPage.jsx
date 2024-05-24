import React from 'react'
import CardCuenta from './Components/CardCuenta'

export default function CuentasPage() {
  const cuentas = [ "Cuenta Yape", "Cuenta Bcp", "Cuenta Basica"]
  return (
    <>
      <h1> aqui iran las cuentas en un componente</h1>
      {cuentas.map((item, index) => (
        <CardCuenta key={index} text={item} />
      ))}
    </>
  )
}
