import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div>This is a test by Vu</div>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
        <div>vutest</div>
        <div>vutest</div>

        <div>vutest</div>
        <div>vutest</div>

      </Link>
    </p>
  </Layout>
)

export default AboutPage
