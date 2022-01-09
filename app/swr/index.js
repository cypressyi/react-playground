import Basic from './basic'

const appList = {
  basic: Basic
}

export default function index({ type }) {
  const App = appList[type] || 'div'
  return (
    <>
      <App />
    </>
  )
}
