import classes from "./main-header.module.css"

import Link from "next/link"

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          Next Events
        </Link>
      </div>
      <nav>
        <ul>
          <li className={classes.navigation}><Link href="/events">All evenements</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default MainHeader