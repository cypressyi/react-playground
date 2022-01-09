import UserName from './UserName'
import UserInfo from './UserInfo'

const userId = 1

export default function index() {
  return (
    <>
      <UserName userId={userId} />
      <UserInfo userId={userId} />
    </>
  )
}
