import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Button>Default button</Button>
      <Button variant={'destructive'} size={'lg'}>
        Destructive lg button
      </Button>
      <Button variant={'outline'} size={'sm'}>
        Outline sm button
      </Button>
      <Button variant={'link'} size={'lg'}>
        Link lg button
      </Button>
      <Button variant={'default1'} size={'lg'}>
        Desturction lg blue button
      </Button>
    </div>
  )
}
