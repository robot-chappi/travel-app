import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

class ItemTwo extends React.Component {
  render() {
  const news = this.props.data.mongodbNewsCompanyNews
    return (
      <Layout>
          <Seo 
          title={`${news.header}`}
          />
        <div className="route-page-gtsb">
          <div className="container">
            <div className="route-page-illustration">
                    <div className="route-page-illustration__img">
                      <img alt={news.header} width={'95%'} src={news.img}/>
                    </div>
                    <div className="route-page-illustration__header">
                      <h4>{news.header}</h4>
                    </div>
                    <div className="route-page-illustration__subtitle">
                      <h4>{news.subtitle}</h4>
                    </div>
            </div>
            <div className="route-page-illustration__above">
                <div className="route-page-illustration__above-text">
                    {news.text}
                </div>
                <div className="route-page-illustration__above-options">
                  <div className="route-page-illustration__above-options-price">
                      Author: <b>{news.author}</b>
                  </div>
                  <div className="route-page-illustration__above-options-date">
                      Date: <b>{news.date}</b>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Layout>
    )
}
}
export default ItemTwo

export const pageQuery = graphql`
  query($id: String!) {
    mongodbNewsCompanyNews(id: { eq: $id }) {
      text
      subtitle
      img
      id
      header
      date
      author
    }
  }
`