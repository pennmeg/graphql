import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <header>
      <div class='bar'>
        <Link href='/'>Sick Fits</Link>
        <Nav />
      </div>
      <div class='sub-bar'>
        <p>Search bar</p>
      </div>
    </header>
  )
}
