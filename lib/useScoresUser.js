import useSWR from 'swr'
import { getToken } from './userAuth'

export const FEED_URL = `${process.env.NEXT_PUBLIC_API_URL}/users/`

const useScoresUser = id => {
  const fetcher = async (url, id) => {
    const res = await fetch(url + id + '/scores',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json().then(data => data.scores)
  }

  const { data, error } = useSWR([ FEED_URL, id ], fetcher)

  return {
    scores: data,
    error: error && error.message,
  }
}

export default useScoresUser
