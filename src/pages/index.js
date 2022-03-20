import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ChartTwo from "../components/donut-diogram"

const IndexPage = (props) => { 
  const routeItems = props.data.allMongodbRoutesRouteItems.edges;
  return (
  <Layout>
    <Seo title="Home" />
    <div className="main-page-gtsb">
        <div className="container">
          <div className="main-page-illustration">
            <div className="row">
                <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__text">
                  <p>Hello traveler :3</p>
                    Welcome to Turkey!
                  </div>
                <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__img">
                <StaticImage
                      src="../images/earth.png"
                      className="main-page-illustration__img-img"
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Earth of Travel"
                      style={{ marginBottom: `1.45rem` }}
                      />
                </div>
              </div>
            </div>
            <div className="main-page-illustration-above">
                <div className="our-advantages">
                    <p data-aos="fade-up" className="our-advantages__p">What are we good at?</p>
                    <div data-aos="slide-up" className="our-advantages-section">
                      <div className="row">
                        <div className="col-md-4 our-advantages-section_cart">
                          <div class="cart-info">
                          <StaticImage
                            src="../images/advantages-routes.png"
                            className="cart-info__img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Travel Person"
                            style={{ marginBottom: `1.45rem` }}
                            />
                            <div class="cart-info-container">
                                  <h4>Multiple routes</h4>
                                  <p>We have been working in the field of tourism for 5 years and we
                                     have thousands of new routes that will not leave you indifferent.</p>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 our-advantages-section_cart">
                          <div class="cart-info">
                          <StaticImage
                            src="../images/advantages-sales.png"
                            className="cart-info__img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Travel Person"
                            style={{ marginBottom: `1.45rem` }}
                            />
                            <div class="cart-info-container">
                                  <h4>Promotions and discounts</h4>
                                  <p>Subscribe to the TRAVEL newsletter and community on social networks
                                     and stay up to date with our promotions and special offers.</p>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 our-advantages-section_cart">
                          <div class="cart-info">
                          <StaticImage
                            src="../images/advantages-more-variants.png"
                            className="cart-info__img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Travel Person"
                            style={{ marginBottom: `1.45rem` }}
                            />
                            <div class="cart-info-container">
                                  <h4>Easy communication</h4>
                                  <p>We work around the clock and you can contact us whenever 
                                    it is convenient for you. You can write or call us at +7 (920) 100 20-34</p>
                                </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div  className="our-statistic">
                  <p className="our-advantages__p our-statistic_p">Our excellent statistics</p>
                  <div className="our-statistic__widget">
                      <div  className="row">
                        <div className="col-md-6">
                          <ChartTwo />
                        </div>
                        <div className="col-md-6">
                          <div className="our-statistic__widget-card">
                              <p className="our-statistic__widget-card_p">Statistics of our travelers for one year!</p>
                              <div className="our-statistic__widget-card_text">
                                <div className="our-statistic__widget-card_text-year">
                                  <FontAwesomeIcon icon={faCircle} size={2} color={"#3dc8ff"}/> <p>The first year | 700 helps</p>
                                </div>
                                <div className="our-statistic__widget-card_text-year">
                                  <FontAwesomeIcon icon={faCircle} size={2} color={"#3df9ff"}/> <p>The second year | 820 helps</p>
                                </div>
                                <div className="our-statistic__widget-card_text-year">
                                  <FontAwesomeIcon icon={faCircle} size={2} color={"#a13dff"}/> <p>The third year | 1200 helps</p>
                                </div>
                                <div className="our-statistic__widget-card_text-year">
                                  <FontAwesomeIcon icon={faCircle} size={2} color={"#ff565e"}/> <p>The fourth year | 2500 helps</p>
                                </div>
                                <div className="our-statistic__widget-card_text-year">
                                  <FontAwesomeIcon icon={faCircle} size={2} color={"#ffffff"}/> <p>The fifth year | 7000 helps</p>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div  className="our-tours">
                  <p className="our-advantages__p our-statistic_p">Our examples of routes</p>
                  <div className="our-tours_widget">
                    {routeItems.map(route =>
                    <Link className="our-tours_widget-item-link" to={'/route/' + route.node.id}>
                        <div className="our-tours_widget-item">
                              <img alt={route.node.title} className="our-tours_widget-item_img" src={route.node.img}/>
                              <div className="our-tours_widget-item_text">
                                <h4>{route.node.title}</h4>
                                <p>Price: {route.node.price}<br/>Time: {route.node.time}</p>
                              </div>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMongodbRoutesRouteItems {
      edges {
        node {
          id
          title
          price
          img
          time
          }
        }
      }
  }
`
