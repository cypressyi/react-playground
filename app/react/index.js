import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

export default function index() {
  return (
    <Tab.Group>
      <Tab.List className={'pb-4'}>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? 'p-2 mr-1 bg-indigo-600 text-white'
                  : 'p-2 mr-1 bg-indigo-100 text-black'
              }
            >
              Tab 1
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? 'p-2 mr-1 bg-indigo-600 text-white'
                  : 'p-2 mr-1 bg-indigo-100 text-black'
              }
            >
              Tab 2
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? 'p-2 mr-1 bg-indigo-600 text-white'
                  : 'p-2 mr-1 bg-indigo-100 text-black'
              }
            >
              Tab 3
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Panel1 />
        <Panel2 />
        <Panel3 />
      </Tab.Panels>
    </Tab.Group>
  )
}

function Panel1() {
  return (
    <Tab.Panel>
      <div>Content 1</div>
      <div>
        <input className="px-2 py-1 my-4 border-solid border-2" />
      </div>
      <div>
        <button className="px-2 py-1 bg-indigo-600 text-white border-solid rounded-md">
          save
        </button>
      </div>
    </Tab.Panel>
  )
}

function Panel2() {
  return (
    <Tab.Panel>
      <div>Content 2</div>
      <div>
        <input className="px-2 py-1 my-4 border-solid border-2" />
      </div>
      <div>
        <button className="px-2 py-1 bg-indigo-600 text-white border-solid rounded-md">
          save
        </button>
      </div>
    </Tab.Panel>
  )
}

function Panel3() {
  return (
    <Tab.Panel>
      <div>Content 3</div>
      <div>
        <input className="px-2 py-1 my-4 border-solid border-2" />
      </div>
      <div>
        <button className="px-2 py-1 bg-indigo-600 text-white border-solid rounded-md">
          save
        </button>
      </div>
    </Tab.Panel>
  )
}
