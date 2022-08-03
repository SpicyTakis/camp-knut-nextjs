import { Text } from '@mantine/core'
import type { NextPage } from 'next'
import Layout from '../components/layout'
import Participants from '../components/participants'

const Home: NextPage = () => {
  return (
    <Layout title="Camp Knut">
      <Text>Main</Text>
      <Participants></Participants>
    </Layout>
  )
}

export default Home;
