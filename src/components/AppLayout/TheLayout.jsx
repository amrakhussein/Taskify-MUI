import { Center, Container } from '@mantine/core'
import React from 'react'
import TheHeader from './TheHeader'

export default function Layout({ children, count }) {
  return (
    <>
      {/* <TheHeading count={count} /> */}
      <Container style={{ background: 'lightgray' }}>{children}</Container>
    </>
  )
}
