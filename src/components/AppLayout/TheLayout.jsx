import { Container } from '@mui/material'
import React from 'react'
import TheHeading from './TheHeader'

export default function Layout({ children, count }) {
  return (
    <>
      <TheHeading count={count} />

      <Container maxWidth='lg'  component="main" sx={{
      }}>
        {children}
      </Container>
    </>
  )
}
