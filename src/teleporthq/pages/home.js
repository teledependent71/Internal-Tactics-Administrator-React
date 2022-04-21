import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Variable Ill Informed Gorilla</title>
        <meta property="og:title" content="Variable Ill Informed Gorilla" />
      </Helmet>
    </div>
  )
}

export default Home
