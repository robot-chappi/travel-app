import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

class ItemFour extends React.Component {
  render() {
  const route = this.props.data.mongodbRoutesBestRoutes
    return (
      <Layout>
          <Seo 
          title={`${route.title}`}
          />
        <div className="route-page-gtsb">
          <div className="container">
            <div className="route-page-illustration">
                    <div className="route-page-illustration__img">
                      <img alt={route.title} width={'95%'} src={route.img}/>
                    </div>
                    <div className="route-page-illustration__text">
                      <h4>{route.title}</h4>
                    </div>
            </div>
            <div className="route-page-illustration__above">
                <div className="route-page-illustration__above-text">
                    {route.text}
                </div>
                <div className="route-page-illustration__above-options">
                  <div className="route-page-illustration__above-options-feedback">
                      Our contacts: <b>+7 920 (100) 20-31</b> or <b>travel@gmail.com</b>
                  </div>
                  <div className="route-page-illustration__above-options-date">
                      Travel time: <b>{route.time}</b>
                  </div>
                  <div className="route-page-illustration__above-options-price">
                      Travel price: <b>{route.price}</b>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Layout>
    )
}
}
export default ItemFour

export const pageQuery = graphql`
  query($id: String!) {
    mongodbRoutesBestRoutes(id: { eq: $id }) {
        price
        text
        time
        title
        img
        id
    }
  }
`