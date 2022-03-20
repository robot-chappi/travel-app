import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

class ItemThree extends React.Component {
  render() {
  const news_employee = this.props.data.mongodbNewsEmployeesNews
    return (
      <Layout>
          <Seo 
          title={`${news_employee.header}`}
          />
        <div className="route-page-gtsb">
          <div className="container">
            <div className="route-page-illustration">
                    <div className="route-page-illustration__img">
                      <img alt={news_employee.header} width={'95%'} src={news_employee.img}/>
                    </div>
                    <div className="route-page-illustration__header">
                      <h4>{news_employee.header}</h4>
                    </div>
                    <div className="route-page-illustration__subtitle">
                      <h4>{news_employee.subtitle}</h4>
                    </div>
            </div>
            <div className="route-page-illustration__above">
                <div className="route-page-illustration__above-text">
                    {news_employee.text}
                </div>
                <div className="route-page-illustration__above-options">
                  <div className="route-page-illustration__above-options-price">
                      Author: <b>{news_employee.author}</b>
                  </div>
                  <div className="route-page-illustration__above-options-date">
                      Date: <b>{news_employee.date}</b>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Layout>
    )
}
}
export default ItemThree

export const pageQuery = graphql`
  query($id: String!) {
    mongodbNewsEmployeesNews(id: { eq: $id }) {
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