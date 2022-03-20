import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const News = (props) => { 
  const companyItems = props.data.allMongodbNewsCompanyNews.edges;
  const employeeItems = props.data.allMongodbNewsEmployeesNews.edges;
  return (
  <Layout>
    <Seo title="News" />
    <div className="news-page-gtsb">
      <div className="container">
        <div className="main-page-illustration">
          <div className="row">
              <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__text">
                <p>What is new?</p>
                    Our news for you :3
                </div>
              <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__img">
              <StaticImage
                  src="../images/news-page.png"
                  className="main-page-illustration__img-img"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="News of Travel"
                  style={{ marginBottom: `1.45rem` }}
                  />
            </div>
          </div>
        </div>
        <div className="news-page-above">
          <div className="news-page-above_company">
            <p className="news-page-above_company__p">All new news of our company</p>
            <div className="our-news_widget">
                    {companyItems.map(company =>
                    <Link className="our-news_widget-item-link" to={'/newscompany/' + company.node.id}>
                        <div className="our-news_widget-item">
                              <img alt={company.node.header} className="our-news_widget-item_img" src={company.node.img}/>
                              <div className="our-news_widget-item_text">
                                <h4>{company.node.header}</h4>
                                <p>Author: {company.node.author}<br/>Date: {company.node.date}</p>
                              </div>
                        </div>
                      </Link>
                    )}
            </div>
          </div>
          <div className="news-page-above_news">
            <p className="news-page-above_employee__p">All new news from our employees</p>
            <div className="our-news_widget">
                    {employeeItems.map(employee =>
                    <Link className="our-news_widget-item-link" to={'/newsemloyee/' + employee.node.id}>
                        <div className="our-news_widget-item">
                              <img alt={employee.node.header} className="our-news_widget-item_img" src={employee.node.img}/>
                              <div className="our-news_widget-item_text">
                                <h4>{employee.node.header}</h4>
                                <p>Author: {employee.node.author}<br/>Date: {employee.node.date}</p>
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

export default News

export const pageQuery = graphql`
  query {
    allMongodbNewsCompanyNews {
      edges {
        node {
          id
          header
          img
          date
          author
        }
      }
    }
    allMongodbNewsEmployeesNews {
      edges {
        node {
          id
          header
          img
          date
          author
        }
      }
    }
  }
`