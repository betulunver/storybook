import React from 'react'
import Button  from './button'

export default { title: 'Buttons' }

export const normal = () => <Button>Hello Button</Button>
export const disabled = () => <Button disabled>Hello Button</Button>
export const active = () => <Button className="active">Hello Button</Button>
