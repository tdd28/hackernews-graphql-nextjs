"use client"

import { GET_ITEM } from "@/documents/queries/item"
import { useSuspenseQuery } from "@apollo/client"
import { use } from "react"

interface ItemProps {
  params: Promise<{ id: string }>
}
export default function Item({ params }: ItemProps) {
  const { id } = use(params)
  const { data: { item } } = useSuspenseQuery(GET_ITEM, { variables: { id: +id } })

  return (
    <p>
      {item.id}
    </p>
  )
}