import useUser from './useUser'

export default function UserInfo({ userId }) {
  const { user, isLoading, isError } = useUser(userId)

  if (isError) return <div>failed to user info</div>
  if (isLoading) return <div>Loading Info...</div>

  return <div>{user.info}</div>
}
