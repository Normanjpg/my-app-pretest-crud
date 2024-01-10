import TableData from '@/components/TableData'
import Image from 'next/image'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className='w-1/2'>
        <TableData/>
      </div>
    </main>
  )
}
