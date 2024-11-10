"use client"

import { makeClient } from "@/lib/apolloClient"
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support"
import React from "react"

export default function ApolloContainer({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}