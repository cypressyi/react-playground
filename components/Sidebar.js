import Link from 'next/link'
import { useRouter } from 'next/router'
import pages from 'routes.json'

export default function Sidebar() {
  const router = useRouter()

  return (
    <div className="sticky left-0 w-64 mr-4 sidebar top-0">
      <div className="p-3">
        {pages.routes.map(({ title, content }) => {
          return (
            <>
              <div className="text-xl">{title}</div>
              <ul className="p-1">
                {content.map(({ title: subTitle, path }) => {
                  return (
                    <Link key={path} href={path}>
                      <a className="hover:bg-gray-200">
                        <li
                          key={path}
                          className={`text-xl hover:bg-cyan-300 px-4 py-2 rounded-lg text-slate-600 ${
                            router.asPath.split('?')[0] === path
                              ? 'bg-cyan-200'
                              : ''
                          }`}
                        >
                          {subTitle}
                        </li>
                      </a>
                    </Link>
                  )
                })}
              </ul>
            </>
          )
        })}
      </div>
    </div>
  )
}
