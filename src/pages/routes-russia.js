import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const RussianRoutes = (props) => {
  const bestRoutes = props.data.allMongodbRoutesBestRoutes.edges;
  const economyRoutes = props.data.allMongodbRoutesEconomyRoutes.edges;

  return (
  <Layout>
    <Seo title="Routes" />
    <div className="routes-page-gtsb">
      <div className="container">
        <div className="main-page-illustration">
          <div className="row">
            <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__text">
                  <p>Beautiful places</p>
                    Our beautiful routes :3
            </div>
            <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__img">
                <StaticImage
                      src="../images/route-page.png"
                      className="main-page-illustration__img-img"
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Whitelist of Travel"
                      style={{ marginBottom: `1.45rem` }}
                      />
            </div>
          </div>
        </div>
        <div className="routes-page-above">
          <div className="our-advantages-up">
                    <p data-aos="fade-up" className="our-advantages__p">Why are we the best?</p>
                    <div data-aos="slide-up" className="our-advantages-section">
                      <div className="row">
                        <div className="col-md-4 our-advantages-section_cart">
                          <div class="cart-info">
                          <StaticImage
                            src="../images/wearethebestone.png"
                            className="cart-info__img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="We are the best"
                            style={{ marginBottom: `1.45rem` }}
                            />
                            <div class="cart-info-container">
                                  <h4>Only wonderful routes</h4>
                                  <p>Our experienced travelers select the most profitable and incredibly beautiful routes for you.
                                     More than 5,000 people have already confirmed this :)</p>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 our-advantages-section_cart">
                          <div class="cart-info">
                          <StaticImage
                            src="../images/wearethebesttwo.png"
                            className="cart-info__img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="We are the best"
                            style={{ marginBottom: `1.45rem` }}
                            />
                            <div class="cart-info-container">
                                  <h4>The best emotions</h4>
                                  <p>Our customers remain satisfied after our routes!
                                     We are recommended as the best remedy for melancholy :) More than 10,000 people think so.</p>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 our-advantages-section_cart">
                          <div class="cart-info">
                          <StaticImage
                            src="../images/wearethebestthree.png"
                            className="cart-info__img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="We are the best"
                            style={{ marginBottom: `1.45rem` }}
                            />
                            <div class="cart-info-container">
                                  <h4>The best vacation</h4>
                                  <p>We work around the clock, and you can contact us at any time convenient for you. You can write or 
                                    call us to arrange an unforgettable vacation for yourself!</p>
                                </div>
                                </div>
                        </div>
                        </div>
                    </div>
          </div>
          <div  className="our-tours">
                  <p className="our-advantages__p our-statistic_p">Our best routes</p>
                  <div className="our-tours_widget">
                    {bestRoutes.map(route =>
                    <Link className="our-tours_widget-item-link" to={'/bestroutes/' + route.node.id}>
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
          <div  className="our-tours">
                  <p className="our-advantages__p our-statistic_p">Our economy routes</p>
                  <div className="our-tours_widget">
                    {economyRoutes.map(route =>
                    <Link className="our-tours_widget-item-link" to={'/economyroutes/' + route.node.id}>
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


export default RussianRoutes

export const pageQuery = graphql`
  query {
    allMongodbRoutesBestRoutes {
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
    allMongodbRoutesEconomyRoutes {
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