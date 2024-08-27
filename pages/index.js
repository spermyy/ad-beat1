import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Daniel Manarang, I live in Macabebe, Pampanga. My hobbies are playing basketball and mobile games and cooking. My favorite food is Filipino food like Lumpiang Sariwa And Ginisang Ampalaya. I like a lot of vegetable food. Other things that I can tell you about me is I like watching movies/series and listening to music.


I took up IT because my sister told me to take the IT course.


After graduation I see myself as a Software Developer Or Maybe other work not related to my course.


Integration Strategies Understanding various approaches to integrating systems, such as point-to-point, middleware, and service-oriented architecture and,
Process Modeling: Documenting and analyzing business processes to improve efficiency and integration.

Integration Techniques and Strategies, Architectural Frameworks and Model and Data Integration and Management and more.
]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}