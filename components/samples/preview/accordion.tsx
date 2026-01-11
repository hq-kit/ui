'use client'

import { useState } from 'react'
import { Code } from '@/components/mdx/code'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Switch } from '@/components/ui/switch'

export default function AccordionPreview() {
  const [allowsMultiple, setAllowsMultiple] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <div>
      <div className='flex flex-col gap-2 lg:flex-row-reverse'>
        <div className='flex flex-col gap-2 border-b p-4 lg:border-b-0 lg:border-l'>
          <Switch className='whitespace-nowrap' isSelected={allowsMultiple} onChange={setAllowsMultiple}>
            Allows Multiple
          </Switch>
          <Switch isSelected={isDisabled} onChange={setIsDisabled}>
            Disabled
          </Switch>
        </div>
        <div className='grid min-h-52 w-full place-items-center px-6'>
          <Accordion allowsMultipleExpanded={allowsMultiple} className='w-full' isDisabled={isDisabled}>
            <AccordionItem id='item-1'>
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p>
                  Our flagship product combines cutting-edge technology with sleek design. Built with premium materials,
                  it offers unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an intuitive user interface designed for
                  both beginners and experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id='item-2'>
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p>
                  We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business
                  days, while express shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track your shipment in real-time through our
                  dedicated tracking portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id='item-3'>
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-4 text-balance'>
                <p>
                  We stand behind our products with a comprehensive 30-day return policy. If you&apos;re not completely
                  satisfied, simply return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping and full refunds processed within 48
                  hours of receiving the returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Code
        className='my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none'
        code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

<Accordion${allowsMultiple ? ' allowsMultipleExpanded' : ''}${isDisabled ? ' isDisabled' : ''} className='w-full'>
  <AccordionItem id='item-1'>
    <AccordionTrigger>Product Information</AccordionTrigger>
    <AccordionContent className='flex flex-col gap-4 text-balance'>
      <p>
        Our flagship product combines cutting-edge technology with sleek design. Built with premium materials,
        it offers unparalleled performance and reliability.
      </p>
      <p>
        Key features include advanced processing capabilities, and an intuitive user interface designed for
        both beginners and experts.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id='item-2'>
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent className='flex flex-col gap-4 text-balance'>
      <p>
        We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business
        days, while express shipping ensures delivery within 1-2 business days.
      </p>
      <p>
        All orders are carefully packaged and fully insured. Track your shipment in real-time through our
        dedicated tracking portal.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem id='item-3'>
    <AccordionTrigger>Return Policy</AccordionTrigger>
    <AccordionContent className='flex flex-col gap-4 text-balance'>
      <p>
        We stand behind our products with a comprehensive 30-day return policy. If you&apos;re not completely
        satisfied, simply return the item in its original condition.
      </p>
      <p>
        Our hassle-free return process includes free return shipping and full refunds processed within 48
        hours of receiving the returned item.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        copy
      />
    </div>
  )
}
