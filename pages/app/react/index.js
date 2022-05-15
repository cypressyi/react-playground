import { useRouter } from 'next/router'
import ReactApp from '/app/react/'

export default function Context() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <ReactApp type={slug} />
    </>
  )
}
