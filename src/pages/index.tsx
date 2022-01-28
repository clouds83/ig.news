import { GetStaticProps } from 'next';
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton/SubscribeButtonComp'
import { stripe } from '../services/stripe';

import styles from './home.module.scss'


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}
export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>EasyGate - Monthly subscription for your readers</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for {product.amount} monthly</span>
            <SubscribeButton/>
          </p>
        </section>

        <img src="#" alt="" width="300" height="500" />
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

 const price = await stripe.prices.retrieve('price_1KMDKPFqT2y0mEsZPAfwf2kV', {
   expand: ['product']
 })

 const product = {
   priceId: price.id,
   amount: new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency: 'USD',
   }).format(price.unit_amount / 100),

 }
 
  return {
    props: {
      product,
      revalidate: 60 * 60 * 168, //7 days
    }
 }
}