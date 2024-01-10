import TableTambah from '@/components/TableTambah'
import Image from 'next/image'

export const metadata = {
  title: 'Tambah Data',
}

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className='w-1/2'>
        <TableTambah/>
      </div>
    </main>
  )
}
