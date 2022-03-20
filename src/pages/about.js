import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faVk, faFacebook } from '@fortawesome/free-brands-svg-icons'


import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About Us" />
    <div className="about-page-gtsb">
        <div className="container">
          <div className="main-page-illustration">
            <div className="row">
                <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__text">
                  <p>How are you?</p>
                    What about us :3
                </div>
                <div className="col-6 col-md-6 col-sm-6 col-xs-6 main-page-illustration__img">
                  <StaticImage
                        src="../images/about-page.png"
                        className="main-page-illustration__img-img"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="The spaceship of Travel"
                        style={{ marginBottom: `1.45rem` }}
                        />
                </div>
            </div>
          </div>
          <div className="about-page-above">
              <div className="about-page-above_about-company">
                  <p className="about-page-above_about-company_p">A small history of our company</p>
                  <div className="about-page-above_about-company_text">
                      <div className="about-page-above_about-company_img">
                        <StaticImage
                            src="../images/company-at-2018.png"
                            className="about-page-above_about-company_text-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="History Person"
                            style={{ marginBottom: `1.45rem` }}
                            />
                      </div>
                      <p>2018</p>
                      <div className="about-page-above_about-company_text-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est orci, semper eu augue eu, consectetur pharetra mauris. Cras dignissim leo sed nunc laoreet suscipit. Sed semper suscipit arcu, ultricies mollis nibh vestibulum id. Donec dictum arcu augue, a pulvinar sem cursus tristique. Sed venenatis metus nec metus commodo iaculis. Curabitur a placerat velit, et pulvinar nisl. Nam vel laoreet tortor. Mauris ultricies arcu eu lorem pulvinar posuere. Etiam laoreet convallis eros. Aliquam pellentesque libero non justo suscipit cursus. In vel bibendum diam, ac vulputate metus. Donec quis venenatis elit, nec mattis massa. Pellentesque pulvinar magna ac consequat rutrum. Nullam diam ex, blandit eget justo sed, feugiat bibendum tortor. Sed nec ante non urna auctor tempor. Nulla et nibh quis dui euismod rutrum.
                        Vestibulum fermentum ornare velit, non mollis metus sodales quis.
                        Vivamus cursus dignissim ligula vitae lobortis. Cras hendrerit, risus sit amet suscipit condimentum, tortor nunc egestas orci, elementum ornare nunc odio a lorem.
                      </div>
                  </div>
                  <div className="about-page-above_about-company_text">
                      <div className="about-page-above_about-company_img">
                        <StaticImage
                            src="../images/company-at-2019.png"
                            className="about-page-above_about-company_text-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="History Person"
                            style={{ marginBottom: `1.45rem` }}
                            />
                      </div>
                      <p>2019</p>
                      <div className="about-page-above_about-company_text-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est orci, semper eu augue eu, consectetur pharetra mauris. Cras dignissim leo sed nunc laoreet suscipit. Sed semper suscipit arcu, ultricies mollis nibh vestibulum id. Donec dictum arcu augue, a pulvinar sem cursus tristique. Sed venenatis metus nec metus commodo iaculis. Curabitur a placerat velit, et pulvinar nisl. Nam vel laoreet tortor. Mauris ultricies arcu eu lorem pulvinar posuere. Etiam laoreet convallis eros. Aliquam pellentesque libero non justo suscipit cursus. In vel bibendum diam, ac vulputate metus. Donec quis venenatis elit, nec mattis massa. Pellentesque pulvinar magna ac consequat rutrum. Nullam diam ex, blandit eget justo sed, feugiat bibendum tortor. Sed nec ante non urna auctor tempor. Nulla et nibh quis dui euismod rutrum.
                        Vestibulum fermentum ornare velit, non mollis metus sodales quis.
                        Vivamus cursus dignissim ligula vitae lobortis. Cras hendrerit, risus sit amet suscipit condimentum, tortor nunc egestas orci, elementum ornare nunc odio a lorem.
                      </div>
                  </div>
                  <div className="about-page-above_about-company_text">
                      <div className="about-page-above_about-company_img">
                        <StaticImage
                            src="../images/company-at-2020.png"
                            className="about-page-above_about-company_text-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="History Person"
                            style={{ marginBottom: `1.45rem` }}
                            />
                      </div>
                      <p>2020</p>
                      <div className="about-page-above_about-company_text-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est orci, semper eu augue eu, consectetur pharetra mauris. Cras dignissim leo sed nunc laoreet suscipit. Sed semper suscipit arcu, ultricies mollis nibh vestibulum id. Donec dictum arcu augue, a pulvinar sem cursus tristique. Sed venenatis metus nec metus commodo iaculis. Curabitur a placerat velit, et pulvinar nisl. Nam vel laoreet tortor. Mauris ultricies arcu eu lorem pulvinar posuere. Etiam laoreet convallis eros. Aliquam pellentesque libero non justo suscipit cursus. In vel bibendum diam, ac vulputate metus. Donec quis venenatis elit, nec mattis massa. Pellentesque pulvinar magna ac consequat rutrum. Nullam diam ex, blandit eget justo sed, feugiat bibendum tortor. Sed nec ante non urna auctor tempor. Nulla et nibh quis dui euismod rutrum.
                        Vestibulum fermentum ornare velit, non mollis metus sodales quis.
                        Vivamus cursus dignissim ligula vitae lobortis. Cras hendrerit, risus sit amet suscipit condimentum, tortor nunc egestas orci, elementum ornare nunc odio a lorem.
                      </div>
                  </div>
                  <div className="about-page-above_about-company_text">
                      <div className="about-page-above_about-company_img">
                        <StaticImage
                            src="../images/company-at-2021.png"
                            className="about-page-above_about-company_text-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="History Person"
                            style={{ marginBottom: `1.45rem` }}
                            />
                      </div>
                      <p>2021</p>
                      <div className="about-page-above_about-company_text-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est orci, semper eu augue eu, consectetur pharetra mauris. Cras dignissim leo sed nunc laoreet suscipit. Sed semper suscipit arcu, ultricies mollis nibh vestibulum id. Donec dictum arcu augue, a pulvinar sem cursus tristique. Sed venenatis metus nec metus commodo iaculis. Curabitur a placerat velit, et pulvinar nisl. Nam vel laoreet tortor. Mauris ultricies arcu eu lorem pulvinar posuere. Etiam laoreet convallis eros. Aliquam pellentesque libero non justo suscipit cursus. In vel bibendum diam, ac vulputate metus. Donec quis venenatis elit, nec mattis massa. Pellentesque pulvinar magna ac consequat rutrum. Nullam diam ex, blandit eget justo sed, feugiat bibendum tortor. Sed nec ante non urna auctor tempor. Nulla et nibh quis dui euismod rutrum.
                        Vestibulum fermentum ornare velit, non mollis metus sodales quis.
                        Vivamus cursus dignissim ligula vitae lobortis. Cras hendrerit, risus sit amet suscipit condimentum, tortor nunc egestas orci, elementum ornare nunc odio a lorem.
                      </div>
                  </div>
                  <div className="about-page-above_about-company_text">
                      <div className="about-page-above_about-company_img">
                        <StaticImage
                            src="../images/company-at-2022.png"
                            className="about-page-above_about-company_text-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="History Person"
                            style={{ marginBottom: `1.45rem` }}
                            />
                      </div>
                      <p>2022</p>
                      <div className="about-page-above_about-company_text-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est orci, semper eu augue eu, consectetur pharetra mauris. Cras dignissim leo sed nunc laoreet suscipit. Sed semper suscipit arcu, ultricies mollis nibh vestibulum id. Donec dictum arcu augue, a pulvinar sem cursus tristique. Sed venenatis metus nec metus commodo iaculis. Curabitur a placerat velit, et pulvinar nisl. Nam vel laoreet tortor. Mauris ultricies arcu eu lorem pulvinar posuere. Etiam laoreet convallis eros. Aliquam pellentesque libero non justo suscipit cursus. In vel bibendum diam, ac vulputate metus. Donec quis venenatis elit, nec mattis massa. Pellentesque pulvinar magna ac consequat rutrum. Nullam diam ex, blandit eget justo sed, feugiat bibendum tortor. Sed nec ante non urna auctor tempor. Nulla et nibh quis dui euismod rutrum.
                        Vestibulum fermentum ornare velit, non mollis metus sodales quis.
                        Vivamus cursus dignissim ligula vitae lobortis. Cras hendrerit, risus sit amet suscipit condimentum, tortor nunc egestas orci, elementum ornare nunc odio a lorem.
                      </div>
                  </div>
              </div>
              <div className="about-page-above_about-employees">
                <p className="about-page-above_about-company_p">Our best employees</p>
                <div className="about-page-above_about-company_text">
                      <div className="about-page-above_about-company_img">
                        <StaticImage
                            src="../images/yuri.jpg"
                            className="about-page-above_about-employees_text-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Sazonov Yuri"
                            style={{ marginBottom: `1.45rem` }}
                            />
                      </div>
                      <p>Sazonov Yuri</p>
                      <div className="about-page-above_about-company_text-social">
                        <a href="https://vk.com/chappic2021"><FontAwesomeIcon icon={faVk} className="about-page-above_about-company_text-social_icon"/></a>
                        <a href="https://www.instagram.com/chappic2020/"><FontAwesomeIcon icon={faInstagram} className="about-page-above_about-company_text-social_icon"/></a>
                        <a href="https://www.facebook.com/daniel.fedoskov/"><FontAwesomeIcon icon={faFacebook} className="about-page-above_about-company_text-social_icon"/></a>
                      </div>
                      <div className="about-page-above_about-company_text-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est orci, semper eu augue eu, consectetur pharetra mauris. Cras dignissim leo sed nunc laoreet suscipit. Sed semper suscipit arcu, ultricies mollis nibh vestibulum id. Donec dictum arcu augue, a pulvinar sem cursus tristique. Sed venenatis metus nec metus commodo iaculis. Curabitur a placerat velit, et pulvinar nisl. Nam vel laoreet tortor. Mauris ultricies arcu eu lorem pulvinar posuere. Etiam laoreet convallis eros. Aliquam pellentesque libero non justo suscipit cursus. In vel bibendum diam, ac vulputate metus. Donec quis venenatis elit, nec mattis massa. Pellentesque pulvinar magna ac consequat rutrum. Nullam diam ex, blandit eget justo sed, feugiat bibendum tortor. Sed nec ante non urna auctor tempor. Nulla et nibh quis dui euismod rutrum.
                        Vestibulum fermentum ornare velit, non mollis metus sodales quis.
                        Vivamus cursus dignissim ligula vitae lobortis. Cras hendrerit, risus sit amet suscipit condimentum, tortor nunc egestas orci, elementum ornare nunc odio a lorem.
                      </div>
                  </div>
                  <div className="about-page-above_about-company_text">
                      <div className="about-page-above_about-company_img">
                        <StaticImage
                            src="../images/andrey.jpg"
                            className="about-page-above_about-employees_text-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Zubkov Andrey"
                            style={{ marginBottom: `1.45rem` }}
                            />
                      </div>
                      <p>Zubkov Andrey</p>
                      <div className="about-page-above_about-company_text-social">
                        <a href="https://vk.com/chappic2021"><FontAwesomeIcon icon={faVk} className="about-page-above_about-company_text-social_icon"/></a>
                        <a href="https://www.instagram.com/chappic2020/"><FontAwesomeIcon icon={faInstagram} className="about-page-above_about-company_text-social_icon"/></a>
                        <a href="https://www.facebook.com/daniel.fedoskov/"><FontAwesomeIcon icon={faFacebook} className="about-page-above_about-company_text-social_icon"/></a>
                      </div>
                      <div className="about-page-above_about-company_text-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est orci, semper eu augue eu, consectetur pharetra mauris. Cras dignissim leo sed nunc laoreet suscipit. Sed semper suscipit arcu, ultricies mollis nibh vestibulum id. Donec dictum arcu augue, a pulvinar sem cursus tristique. Sed venenatis metus nec metus commodo iaculis. Curabitur a placerat velit, et pulvinar nisl. Nam vel laoreet tortor. Mauris ultricies arcu eu lorem pulvinar posuere. Etiam laoreet convallis eros. Aliquam pellentesque libero non justo suscipit cursus. In vel bibendum diam, ac vulputate metus. Donec quis venenatis elit, nec mattis massa. Pellentesque pulvinar magna ac consequat rutrum. Nullam diam ex, blandit eget justo sed, feugiat bibendum tortor. Sed nec ante non urna auctor tempor. Nulla et nibh quis dui euismod rutrum.
                        Vestibulum fermentum ornare velit, non mollis metus sodales quis.
                        Vivamus cursus dignissim ligula vitae lobortis. Cras hendrerit, risus sit amet suscipit condimentum, tortor nunc egestas orci, elementum ornare nunc odio a lorem.
                      </div>
                  </div>
                  <div className="about-page-above_about-company_text">
                      <div className="about-page-above_about-company_img">
                        <StaticImage
                            src="../images/sofia.jpg"
                            className="about-page-above_about-employees_text-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Yakovleva Sofia"
                            style={{ marginBottom: `1.45rem` }}
                            />
                      </div>
                      <p>Yakovleva Sofia</p>
                      <div className="about-page-above_about-company_text-social">
                        <a href="https://vk.com/chappic2021"><FontAwesomeIcon icon={faVk} className="about-page-above_about-company_text-social_icon"/></a>
                        <a href="https://www.instagram.com/chappic2020/"><FontAwesomeIcon icon={faInstagram} className="about-page-above_about-company_text-social_icon"/></a>
                        <a href="https://www.facebook.com/daniel.fedoskov/"><FontAwesomeIcon icon={faFacebook} className="about-page-above_about-company_text-social_icon"/></a>
                      </div>
                      <div className="about-page-above_about-company_text-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est orci, semper eu augue eu, consectetur pharetra mauris. Cras dignissim leo sed nunc laoreet suscipit. Sed semper suscipit arcu, ultricies mollis nibh vestibulum id. Donec dictum arcu augue, a pulvinar sem cursus tristique. Sed venenatis metus nec metus commodo iaculis. Curabitur a placerat velit, et pulvinar nisl. Nam vel laoreet tortor. Mauris ultricies arcu eu lorem pulvinar posuere. Etiam laoreet convallis eros. Aliquam pellentesque libero non justo suscipit cursus. In vel bibendum diam, ac vulputate metus. Donec quis venenatis elit, nec mattis massa. Pellentesque pulvinar magna ac consequat rutrum. Nullam diam ex, blandit eget justo sed, feugiat bibendum tortor. Sed nec ante non urna auctor tempor. Nulla et nibh quis dui euismod rutrum.
                        Vestibulum fermentum ornare velit, non mollis metus sodales quis.
                        Vivamus cursus dignissim ligula vitae lobortis. Cras hendrerit, risus sit amet suscipit condimentum, tortor nunc egestas orci, elementum ornare nunc odio a lorem.
                      </div>
                  </div>
                  <div className="about-page-above_about-company_text">
                      <div className="about-page-above_about-company_img">
                        <StaticImage
                            src="../images/julia.jpg"
                            className="about-page-above_about-employees_text-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="Julia Frolova"
                            style={{ marginBottom: `1.45rem` }}
                            />
                      </div>
                      <p>Julia Frolova</p>
                      <div className="about-page-above_about-company_text-social">
                        <a href="https://vk.com/chappic2021"><FontAwesomeIcon icon={faVk} className="about-page-above_about-company_text-social_icon"/></a>
                        <a href="https://www.instagram.com/chappic2020/"><FontAwesomeIcon icon={faInstagram} className="about-page-above_about-company_text-social_icon"/></a>
                        <a href="https://www.facebook.com/daniel.fedoskov/"><FontAwesomeIcon icon={faFacebook} className="about-page-above_about-company_text-social_icon"/></a>
                      </div>
                      <div className="about-page-above_about-company_text-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est orci, semper eu augue eu, consectetur pharetra mauris. Cras dignissim leo sed nunc laoreet suscipit. Sed semper suscipit arcu, ultricies mollis nibh vestibulum id. Donec dictum arcu augue, a pulvinar sem cursus tristique. Sed venenatis metus nec metus commodo iaculis. Curabitur a placerat velit, et pulvinar nisl. Nam vel laoreet tortor. Mauris ultricies arcu eu lorem pulvinar posuere. Etiam laoreet convallis eros. Aliquam pellentesque libero non justo suscipit cursus. In vel bibendum diam, ac vulputate metus. Donec quis venenatis elit, nec mattis massa. Pellentesque pulvinar magna ac consequat rutrum. Nullam diam ex, blandit eget justo sed, feugiat bibendum tortor. Sed nec ante non urna auctor tempor. Nulla et nibh quis dui euismod rutrum.
                        Vestibulum fermentum ornare velit, non mollis metus sodales quis.
                        Vivamus cursus dignissim ligula vitae lobortis. Cras hendrerit, risus sit amet suscipit condimentum, tortor nunc egestas orci, elementum ornare nunc odio a lorem.
                      </div>
                  </div>
              </div>
              
          </div>
        </div>
    </div>
  </Layout>
)

export default About