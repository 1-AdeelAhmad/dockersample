import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = (props: any) => {
    console.log('props', props);
    return (
        <div className={styles.container} data-testid="app">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Hello! From Server {props.something}
        </div>
    );
};

export default Home;

export const getServerSideProps = async (context: any) => {
    return {
        props: {
            something: process.env.TEST_VAR,
        }, // will be passed to the page component as props
    };
};
