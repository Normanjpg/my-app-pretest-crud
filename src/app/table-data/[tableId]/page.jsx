import DetailBuku from '@/components/DetailBuku'
import Image from 'next/image'

export default function PostDetail({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="w-1/2">
        <h1>Post Detail {params.tableId}</h1>
        <DetailBuku />
      </div>
    </main>
  );
}
