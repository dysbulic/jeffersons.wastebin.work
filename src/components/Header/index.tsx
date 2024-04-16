import { HTMLAttributes, ReactNode } from "react"

export const Header = (
  { title, id, ...props }:
  {
    title: ReactNode
    id?: string
    props?: HTMLAttributes<HTMLHeadingElement>
  }
) => {
  return (
    <header {...{ id }} {...props}>
      <h1>{title}</h1>
    </header>
  )
}