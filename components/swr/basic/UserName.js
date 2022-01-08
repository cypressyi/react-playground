import useUser from './useUser'

export default function UserName({ userId }) {
  const { user, isLoading, isError } = useUser(userId)

  if (isError) return <div>failed to user name</div>
  if (isLoading) return <div>Loading Name...</div>

  return <div>{user.name}</div>
}
