import Head from 'next/head';
import Image from 'next/image';

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        counsellers {
         data {
           attributes {
             Name
             Pronouns
             Qualifications
             Biography
             DetailedBio
             Headshot {
               data {
                 attributes {
                   url
                 }
               }
             }
           }
         }
       }
      }
      `,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: data,
  };
}

export default function Home({ data }) {
  console.log(data);
  return <div>Hello!</div>;
}
