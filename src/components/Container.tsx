import type { PropsWithChildren } from 'react'
import { tokens } from '../styles/tokens'

type ContainerProps = PropsWithChildren<{
  className?: string
}>

const Container = ({ children, className }: ContainerProps) => {
  const classes = className
    ? `${tokens.layout.container} ${className}`
    : tokens.layout.container
  return <div className={classes}>{children}</div>
}

export default Container
