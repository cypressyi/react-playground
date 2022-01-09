import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-slate-700 h-16 w-full">
      <div className="container mx-auto relative">
        <div className="flex">
          <Link href={'/'}>
            <a className="flex">
              <div className="p-3">
                <img className="h-10 w-10" src="/logo.png" alt="logo" />
              </div>
              <div className="p-4 text-2xl text-slate-300">
                React Playground
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
