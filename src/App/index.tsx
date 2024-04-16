import { Header } from '../components/Header'
import tyl from './index.module.css'

export const App = () => {
  const params = new URLSearchParams(window.location.search)
  params.forEach((value, name) => {
    console.debug({ name, value })
  })

  return (
    <article id={tyl.artifacts}>
      <Header
        title={
          <span id={tyl[`Jefferson’s-Wastebasket`]}>
            <span id={tyl.Jefferson}>Jefferson</span>’s{' '}
            Wastebasket
          </span>
        }
        id={tyl['token-value']}
      />
      <main id={tyl.leavings}>
        <section>
          <a href="/browse"><h2>Deritus</h2></a>

          <p>Imagine that you someone had preserved the scraps Jefferson threw into his wastebin as he worked on documents like the Declaration of Independence.</p>
          <p>This site is potentially a way to score historically relevant deritus such as Jefferson’s garbage.</p>
          <p>It offers the leavings of <a href="https://x.com/dysbulic/">dysbulic</a>: an aging software developer psychotically convinced that revolution is going to arise & that he will play a pivotal role in it's achievement.</p>
        </section>
        <section>
          <a href="/buy"><h2>Purchase</h2></a>

          <p>To purchase an item, you buy an accompanying NFT. At any time you can burn the NFT to trigger the collection of the address where you want the item shipped.</p>
          <p>The item will have a NFC tag attached that contains a private key you can use to control associated accounts.</p>
        </section>
      </main>
    </article>
  )
}

export default App