import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({  siteDescription }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, margin: `2rem auto 1.45rem` }}>
      <Image />
    </div>
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontStyle: 'italic' }}>
      <p>Herein, I shall attempt to record the story, the testaments if you will, of Colonel Krill and the Tentacle Cult.</p>
      <p>The story begins more than 150 years ago at the height of the British Empire in India when Colonel Krill was first tasked with the unenviable job of eradicating what Lord Curzon deemed to be ‘devil worshiping cults’, but was really a purge of anything contrary to the western civilization ideals that the Victorian English felt was their God-given duty to spread throughout the world.</p>
      <p>It is the story of that man, Colonel Aloysius Krill, and his mad ambition to destroy the gods who are rejected. And my attempt to understand, and pass along, his reasons for doing so.</p>
      <p>This I record in <strong>THE 64 TESTAMENTS OF COL. ALOYSIUS KRILL AND THE TENTACLE CULT</strong>.</p>
      <p>But first, I must set the stage and explain, for those of you not experts in the ancient deities, who the ‘gods who are rejected’ were and how Col. Krill came to defy them.</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <button style={{ margin: '1rem auto', padding: '1rem', color: 'white', backgroundColor: '#242424', border: 'none', textAlign: 'center' }}>Read THE GODS WHO ARE REJECTED</button>
    </div>
  </Layout>
)

export default IndexPage
