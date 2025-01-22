import { Button } from '@/components/ui/button'
import React from 'react'

const Buttons = () => {
  return (
    <div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
         <Button>Default</Button>
         <Button variant="primary">Primary</Button>
         <Button variant="primaryOutline">p0</Button>

         <Button variant="secondary">Primary</Button>
         <Button variant="secondaryOutline">p o</Button>

         <Button variant="danger">danger</Button>
         <Button variant="dangerOutline">danger Outline</Button>

         {/* <Button variant="danger">Super</Button>
         <Button variant="dangerOutline">Super Outline</Button> */}
         {/* //sidebar */}
    </div>
   
  )
}

export default Buttons