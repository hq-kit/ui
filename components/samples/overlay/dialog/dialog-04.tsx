import { IconChevronLeft } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const DialogScrollableDemo = () => {
  return (
    <Dialog>
      <Button variant='outline'>Scrollable Dialog</Button>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader className='contents space-y-0 text-left'>
          <DialogTitle className='px-6 pt-6'>Product Information</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <div className='space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground'>
            <div className='space-y-1'>
              <p>
                <strong>Product Name:</strong> SuperTech 2000
              </p>
              <p>
                The SuperTech 2000 is a high-performance device designed for tech enthusiasts and professionals alike,
                offering superior functionality and innovative features.
              </p>
            </div>
            <div className='space-y-1'>
              <p>
                <strong>Specifications:</strong>
              </p>
              <ul>
                <li>Processor: 3.6GHz Octa-Core</li>
                <li>Memory: 16GB RAM</li>
                <li>Storage: 1TB SSD</li>
                <li>Display: 15.6&rdquo; 4K UHD</li>
                <li>Battery Life: 12 hours</li>
                <li>Weight: 2.1kg</li>
              </ul>
            </div>
            <div className='space-y-1'>
              <p>
                <strong>Key Features:</strong>
              </p>
              <ul>
                <li>Ultra-fast processing speed for intensive tasks</li>
                <li>Long battery life, perfect for on-the-go professionals</li>
                <li>Sleek and portable design</li>
                <li>Advanced cooling system</li>
                <li>Excellent build quality for durability</li>
              </ul>
            </div>
            <div className='space-y-1'>
              <p>
                <strong>Price:</strong>
              </p>
              <p>$2,499.99 (Includes 1-year warranty)</p>
            </div>
            <div className='space-y-1'>
              <p>
                <strong>Customer Reviews:</strong>
              </p>
              <p>
                &rdquo;Absolutely fantastic device! The performance is exceptional, and it handles all of my design
                software without any lag.&rdquo; - John D.
              </p>
              <p>
                &rdquo;Best purchase I&apos;ve made in years. The display quality is stunning, and the battery lasts all
                day.&rdquo; - Sarah L.
              </p>
              <p>
                &rdquo;The SuperTech 2000 is a game-changer in the tech industry. Worth every penny!&rdquo; - Emma W.
              </p>
            </div>
            <div className='space-y-1'>
              <p>
                <strong>Return Policy:</strong>
              </p>
              <p>
                If you&apos;re not satisfied with your purchase, we offer a 30-day return policy. Return the product
                within 30 days of purchase for a full refund.
              </p>
            </div>
            <div className='space-y-1'>
              <p>
                <strong>Warranty:</strong>
              </p>
              <p>
                Comes with a standard 1-year warranty covering defects in materials and workmanship. Extended warranty
                plans are available.
              </p>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button slot='close' variant='outline'>
            <IconChevronLeft />
            Back
          </Button>
          <Button type='button'>Read More</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DialogScrollableDemo
