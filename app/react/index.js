import { useState, useEffect, Fragment, useRef } from 'react'
import { format } from 'date-fns'
import { Tab } from '@headlessui/react'

const mockData = ['0', '1', '2']

export default function Index() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [updateTime, setUpdateTime] = useState(
    format(new Date(), 'yyyy-MM-dd HH:mm:ss')
  )

  const handleUpdate = () => {
    setUpdateTime(format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
  }

  // For tab2
  const [tab2Value, setTab2Value] = useState(mockData[2])

  const handleChangeTab2Value = value => {
    setTab2Value(value)
  }

  const handleUpdateTab2Value = () => {
    mockData[2] = tab2Value
    handleUpdate()
  }

  useEffect(() => {
    setTab2Value(mockData[2])
  }, [selectedIndex])

  return (
    <>
      <div className="pb-4">
        <div>{updateTime}</div>
        <div>
          {mockData.map((value, index) => (
            <div key={value}>{`Tab ${index} => ${value}`}</div>
          ))}
        </div>
      </div>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
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
                Tab 0
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
        </Tab.List>
        <Tab.Panels>
          <Panel0 selectedIndex={selectedIndex} handleUpdate={handleUpdate} />
          <Panel1 handleUpdate={handleUpdate} />
          <Panel2
            inputValue={tab2Value}
            handleChangeTab2Value={handleChangeTab2Value}
            handleUpdateTab2Value={handleUpdateTab2Value}
          />
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}

function Panel0({ selectedIndex, handleUpdate }) {
  const [inputValue, setInputValue] = useState(mockData[0])
  const [inputValueMirror, setInputValueMirror] = useState(mockData[0])
  const [isChanged, setIsChanged] = useState(false)

  const handleChange = e => {
    setInputValue(e.target.value)
    setIsChanged(true)
  }

  const handleSave = () => {
    mockData[0] = inputValue
    setInputValueMirror(inputValue)
    handleUpdate()
  }

  useEffect(() => {
    if (isChanged) {
      setInputValue(inputValueMirror)
    }
  }, [inputValueMirror, isChanged, selectedIndex])

  return (
    <Tab.Panel>
      <div>Content 0</div>
      <div>
        <input
          className="px-2 py-1 my-4 border-solid border-2"
          value={inputValue}
          onChange={handleChange}
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

function Panel1({ handleUpdate }) {
  const inputRef = useRef()
  const handleSave = () => {
    mockData[1] = inputRef.current.value
    handleUpdate()
  }

  return (
    <Tab.Panel>
      <div>Content 1</div>
      <div>
        <input
          className="px-2 py-1 my-4 border-solid border-2"
          defaultValue={mockData[1]}
          ref={inputRef}
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

function Panel2({ inputValue, handleChangeTab2Value, handleUpdateTab2Value }) {
  return (
    <Tab.Panel>
      <div>Content 2</div>
      <div>
        <input
          className="px-2 py-1 my-4 border-solid border-2"
          value={inputValue}
          onChange={e => handleChangeTab2Value(e.target.value)}
        />
      </div>
      <div>
        <button
          className="px-2 py-1 bg-indigo-600 text-white border-solid rounded-md"
          type="button"
          onClick={() => handleUpdateTab2Value(inputValue)}
        >
          Save
        </button>
      </div>
    </Tab.Panel>
  )
}
