import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="main-page-gtsb">
        <div className="container">
          <div className="main-page-illustration">
            <div className="row">
                <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__text">
                  <p>Not found :3</p>
                  You made a little mistake
                  </div>
                <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__img">
                <StaticImage
                      src="../images/notfound.png"
                      className="main-page-illustration__img-img"
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      alt="Dog of Travel"
                      style={{ marginBottom: `1.45rem` }}
                      />
                </div>
              </div>
            </div>
        </div>
    </div>
  </Layout>
)

export default NotFoundPage
