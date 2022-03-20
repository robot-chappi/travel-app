import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TicketsBuy = (props) => { 
  const bestRoutes = props.data.allMongodbRoutesBestRoutes.edges;
  const economyRoutes = props.data.allMongodbRoutesEconomyRoutes.edges;
  return (
  <Layout>
    <Seo title="Buy Tickets" />
    <div className="buy-page-gtsb">
        <div className="container">
          <div className="main-page-illustration">
            <div className="row">
                <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__text">
                  <p>Price of tours</p>
                    Our best prices :3
                  </div>
                <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__img">
                <StaticImage
                      src="../images/buy-page.png"
                      className="main-page-illustration__img-img"
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Credit Card of Travel"
                      style={{ marginBottom: `1.45rem` }}
                      />
                </div>
              </div>
            </div>
            <div className="buy-page-above">
            <div className="our-advantages-up">
                    <p data-aos="fade-up" className="our-advantages__p">Why are our prices the best?</p>
                    <div data-aos="slide-up" className="our-advantages-section">
                      <div className="row">
                        <div className="col-md-4 our-advantages-section_cart">
                          <div class="cart-info">
                          <StaticImage
                            src="../images/buy-one.png"
                            className="cart-info__img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Our prices are the best"
                            style={{ marginBottom: `1.45rem` }}
                            />
                            <div class="cart-info-container">
                                  <h4>Lower than everyone else's</h4>
                                  <p>Our prices are 25% lower than those of other travel agencies. We don't take a lot of money 
                                    for ourselves as we want your vacation to be as budget-friendly as possible :)</p>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 our-advantages-section_cart">
                          <div class="cart-info">
                          <StaticImage
                            src="../images/buy-two.png"
                            className="cart-info__img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Our prices are the best"
                            style={{ marginBottom: `1.45rem` }}
                            />
                            <div class="cart-info-container">
                                  <h4>Only the most necessary</h4>
                                  <p>We collect for our customers only the most necessary things for travel, without spending extra money.</p>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-4 our-advantages-section_cart">
                          <div class="cart-info">
                          <StaticImage
                            src="../images/buy-three.png"
                            className="cart-info__img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Our prices are the best"
                            style={{ marginBottom: `1.45rem` }}
                            />
                            <div class="cart-info-container">
                                  <h4>We do everything for you</h4>
                                  <p>You will not need to collect bundles of documents yourself, as we will do it for you!
                                     We will also recommend everything you need and buy it for you!</p>
                                </div>
                                </div>
                        </div>
                        </div>
                    </div>
          </div>
          <div  className="our-tours">
                  <p className="our-advantages__p our-statistic_p">Buy expensive travel</p>
                  <div className="our-tours_widget">
                    {bestRoutes.map(route =>
                    <Link className="our-tours_widget-item-link" to={'/bestroutes/' + route.node.id}>
                        <div className="our-tours_widget-item">
                              <img alt={route.node.title} className="our-tours_widget-item_img" src={route.node.img}/>
                              <div className="our-tours_widget-item_text">
                                <h4>{route.node.title}</h4>
                                <p>Price: {route.node.price}<br/>Time: {route.node.time}</p>
                                <div className="our-tours_widget-item_call-us">
                                  <Link to="/contactus-number" className="our-tours_widget-item_call-us_link"><p>To call us</p></Link> ___ <Link to="/contactus-email" className="our-tours_widget-item_call-us_link"><p>To text us</p></Link>
                                </div>
                              </div>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
          <div  className="our-tours">
                  <p className="our-advantages__p our-statistic_p">Buy budget travel</p>
                  <div className="our-tours_widget">
                    {economyRoutes.map(route =>
                    <Link className="our-tours_widget-item-link" to={'/economyroutes/' + route.node.id}>
                        <div className="our-tours_widget-item">
                              <img alt={route.node.title} className="our-tours_widget-item_img" src={route.node.img}/>
                              <div className="our-tours_widget-item_text">
                                <h4>{route.node.title}</h4>
                                <p>Price: {route.node.price}<br/>Time: {route.node.time}</p>
                                <div className="our-tours_widget-item_call-us">
                                  <Link to="/contactus-number" className="our-tours_widget-item_call-us_link"><p>To call us</p></Link> ___ <Link to="/contactus-email" className="our-tours_widget-item_call-us_link"><p>To text us</p></Link>
                                </div>
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

export default TicketsBuy

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