import React from "react";
import * as styles from "../styles/About-us.module.css";
import Layout from "../components/Layout";
import AboutUs1 from "../components/AboutUs1";
import AboutUs2 from "../components/AboutUs2";
import AboutUs3 from "../components/AboutUs3";
import { Button } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <AboutUs1 />
        <AboutUs3 />

        <AboutUs2 />
      
        <footer
          style={{
            backgroundColor: "hsl(0, 0%, 95%)",
            marginBottom: "20px",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              margin: "0",
              color: "gray",
              fontSize: "1.2em",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Contact CEO at :
            <a
              href="mailto:yash@siteview.ai"
              style={{
                color: "gray",
                textDecoration: "none",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
            >
              <Button colorScheme="purple" size="lg">
                yash@siteview.ai
              </Button>
            </a>
          </p>

        </footer>
      </div>
    </Layout>
  );
};

export default AboutUs;
