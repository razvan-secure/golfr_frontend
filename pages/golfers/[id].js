import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ScorePostWidget from '../../components/ScorePostWidget'
import ScoreCard from '../../components/ScoreCard'
import useScoresUser from '../../lib/useScoresUser'

const GolferScore = () => {
  const router = useRouter()
  const { id } = router.query

  const { scores, error } = useScoresUser(id)

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            <ScorePostWidget />
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default GolferScore
