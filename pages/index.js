import Layout from '../components/Layout'
import ScorePostWidget from '../components/ScorePostWidget'
import ScoreCard from '../components/ScoreCard'
import useScores from '../lib/useScores'
import ScoresDisplay from '../components/ScoresDisplay'

const Home = () => {
  const { scores, error } = useScores()

  return (
    <ScoresDisplay scores={scores} error={error}/>
  )
}

export default Home
