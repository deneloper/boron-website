import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="spotlight">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h1>Boron is administration interface for your web applications</h1>
          </div>
          <div className="col">
            <div className="screenshot">

            </div>
          </div>
        </div>
      </div>
    </div>


      <div className="container">
        <div class="announcements">
          08/08/2018 - <a href="">Alpha version released</a>
        </div>
      </div>


    <div className="boxes">
      <div className="container">

        <div className="row">
          <div className="col">
            <div className="box">
              <h2>Why?</h2>
              <div class="box__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt laoreet turpis, non interdum metus lobortis sit amet. Donec scelerisque orci id dapibus vestibulum. </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <h2>How?</h2>
              <div class="box__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt laoreet turpis, non interdum metus lobortis sit amet. Donec scelerisque orci id dapibus vestibulum. </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="box">
              <h2>What?</h2>
              <div class="box__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt laoreet turpis, non interdum metus lobortis sit amet. Donec scelerisque orci id dapibus vestibulum. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
