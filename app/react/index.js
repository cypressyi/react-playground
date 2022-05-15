import { useState, Fragment } from 'react'
import { Tab } from '@headlessui/react'

const mockData = ['1', '2', '3']

export default function Index() {
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
  const [inputValue, setInputValue] = useState(mockData[0])
  const handleSave = () => {
    mockData[0] = inputValue
  }

  return (
    <Tab.Panel>
      <div>Content 1</div>
      <div>
        <input
          className="px-2 py-1 my-4 border-solid border-2"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button
          className="px-2 py-1 bg-indigo-600 text-white border-solid rounded-md"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </Tab.Panel>
  )
}

function Panel2() {
  const [inputValue, setInputValue] = useState(mockData[1])
  const handleSave = () => {
    mockData[0] = inputValue
  }
  return (
    <Tab.Panel>
      <div>Content 2</div>
      <div>
        <input
          className="px-2 py-1 my-4 border-solid border-2"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button
          className="px-2 py-1 bg-indigo-600 text-white border-solid rounded-md"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </Tab.Panel>
  )
}

function Panel3() {
  const [inputValue, setInputValue] = useState(mockData[2])
  const handleSave = () => {
    mockData[0] = inputValue
  }
  return (
    <Tab.Panel>
      <div>Content 3</div>
      <div>
        <input
          className="px-2 py-1 my-4 border-solid border-2"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button
          className="px-2 py-1 bg-indigo-600 text-white border-solid rounded-md"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </Tab.Panel>
  )
}
