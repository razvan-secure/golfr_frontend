import { useRouter } from 'next/router'
import useScoresUser from '../../lib/useScoresUser'
import ScoresDisplay from '../../components/ScoresDisplay'

const GolferScore = () => {
  const router = useRouter()
  const { id } = router.query

  const { scores, error } = useScoresUser(id)

  return (
    <ScoresDisplay scores={scores} error={error}/>
  )
}

export default GolferScore
