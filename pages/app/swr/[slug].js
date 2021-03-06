import { useRouter } from 'next/router'
import SWRApp from '/app/swr'

export default function Slug() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <SWRApp type={slug} />
    </>
  )
}
