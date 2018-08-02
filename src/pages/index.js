import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="spotlight">
      <div className="container">
        <h1>Faster Development</h1>
        <p>Boron is highly customizable administration interface for your applications, built with Vue.js</p>
      </div>
    </div>
    <div className="boxes">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="box">
              <h2>Why?</h2>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <h2>How?</h2>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <h2>What?</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
