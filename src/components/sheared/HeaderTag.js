import Head from "next/head";

const HeadTag = ({ title, descriptionContent }) => {
    return (
        <Head>
            <meta charSet='UTF-8' />
            <meta name='keywords' content='titla, meta, nextjs' />
            <meta name='author' content='Syamlal CM' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='description' content={descriptionContent}></meta>
            <title>{title}</title>
        </Head>
    );
};

export default HeadTag;