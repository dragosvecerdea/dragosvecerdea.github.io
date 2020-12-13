import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/404.module.css"

console.log(styles)
const NotFoundPage = ({ location }) => {
  useEffect(() => {
    ;["Left", "Right"].forEach(side => {
      document
        .querySelector(`.${styles.bojack}`)
        .addEventListener("mousemove", function (event) {
          var eye = document.querySelector(`.${styles[`bojack__eye${side}`]}`)
          let rect = eye.getBoundingClientRect()
          let win = eye.ownerDocument.defaultView
          var x =
            rect.left + win.pageXOffset + eye.getBoundingClientRect().width / 2
          var y =
            rect.top + win.pageYOffset + eye.getBoundingClientRect().height / 2
          var rad = Math.atan2(event.pageX - x, event.pageY - y)
          var rot = rad * (180 / Math.PI) * -1
          eye.style.transform = "rotate(" + rot + "deg)"
        })
    })
  }, [])

  return (
    <div className={styles.body}>
      <Layout location={location}>
        <SEO title="404: Not Found" />
        <h2 style={{ textAlign: "center" }}>404 NOT FOUND</h2>
        <div>
          <div className={styles.bg}></div>
          <div className={styles.bojack}>
            <div
              className={`${styles.bojack__hair} ${styles.bojack__hairTop1}`}
            ></div>
            <div
              className={`${styles.bojack__hair} ${styles.bojack__hairTop2}`}
            ></div>
            <div
              className={`${styles.bojack__hair} ${styles.bojack__hairTop3}`}
            ></div>
            <div
              className={`${styles.bojack__hair} ${styles.bojack__hairTop4}`}
            ></div>
            <div
              className={`${styles.bojack__hair} ${styles.bojack__hairLeft1}`}
            ></div>
            <div
              className={`${styles.bojack__hair} ${styles.bojack__hairLeft2}`}
            ></div>
            <div
              className={`${styles.bojack__hair} ${styles.bojack__hairRight1}`}
            ></div>
            <div className={`${styles.bojack__base}`}></div>
            <div className={`${styles.bojack__earLeft}`}></div>
            <div className={`${styles.bojack__earRight}`}>
              <div className={`${styles.bojack__earLine}`}></div>
            </div>
            <div className={`${styles.bojack__forehead}`}></div>
            <div className={`${styles.bojack__foreheadSquare}`}></div>
            <div className={`${styles.bojack__eyebrows}`}></div>
            <div
              className={`${styles.bojack__eye} ${styles.bojack__eyeLeft}`}
            ></div>
            <div
              className={`${styles.bojack__eye} ${styles.bojack__eyeRight}`}
            ></div>
            <div className={`${styles.bojack__eyeSignsLeft}`}></div>
            <div className={`${styles.bojack__eyeSignsRight}`}></div>
            <div className={`${styles.bojack__crown}`}></div>
            <div className={`${styles.bojack__neck}`}></div>
            <div className={`${styles.bojack__nose}`}>
              <div className={`${styles.bojack__snout}`}></div>
              <div className={`${styles.bojack__nostrils}`}></div>
              <div className={`${styles.bojack__nostrilLeft}`}></div>
              <div className={`${styles.bojack__nostrilRight}`}></div>
              <div className={`${styles.bojack__noseFiller}`}></div>
              <div className={`${styles.bojack__chin}`}>
                <div className={`${styles.bojack__chin1}`}></div>
                <div className={`${styles.bojack__chin2}`}></div>
                <div className={`${styles.bojack__chin3}`}></div>
              </div>
              <div className={`${styles.bojack__mouth}`}></div>
              <div className={`${styles.bojack__triangle}`}>
                <div className={`${styles.bojack__triangleInner}`}>
                  <div
                    className={`${styles.bojack__noseSplodge} ${styles.bojack__noseSplodge1}`}
                  ></div>
                  <div
                    className={`${styles.bojack__noseSplodge} ${styles.bojack__noseSplodge2}`}
                  ></div>
                  <div
                    className={`${styles.bojack__noseSplodge} ${styles.bojack__noseSplodge3}`}
                  ></div>
                  <div
                    className={`${styles.bojack__noseSplodge} ${styles.bojack__noseSplodge4}`}
                  ></div>
                  <div
                    className={`${styles.bojack__noseSplodge} ${styles.bojack__noseSplodge5}`}
                  ></div>
                </div>
              </div>
            </div>
            <div className={`${styles.bojack__chest}`}></div>
          </div>
        </div>
        <h3 style={{ textAlign: "center" }}>Lookin' around ?</h3>
      </Layout>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
