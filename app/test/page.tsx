import { Suspense } from 'react'
import Counter from './Counter'
import UserList from './UserList'
import PostList from './PostList'

const Test = () => {
  return (
    <>
      <h1>Testページ</h1>

      <Counter />
      <Suspense fallback={<p className="mt-4">Loading...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <UserList />
      </Suspense>
      <Suspense fallback={<p className="mt-4">Loading...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <PostList />
      </Suspense>
    </>
  )
}

export default Test
