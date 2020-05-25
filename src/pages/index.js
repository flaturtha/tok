import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({  siteDescription }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `100px`, margin: `2rem auto 1.45rem` }}>
      <Image />
    </div>
    <div style={{ maxWidth: '960px', margin: '2rem auto -1rem' }}>
      <div style={{
        margin: '2rem 0',
        padding: '0 0 -1rem 0',
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray',
        fontVariant: 'smallCaps',
        display: 'flex',
        fontStyle: 'normal',
        justifyContent: 'space-between'
      }}>
        <p style={{ marginBottom: '0' }}>FROM THE DESK OF <em>Ted Pyne</em>, Citizen Reporter:</p>
        <p style={{ marginBottom: '0' }}>24 August 2067</p>
      </div>  

      <p style={{ marginLeft: '2rem', fontVariant: 'small-caps', fontStyle: 'italic', fontSize: '1.25rem' }}>Herein, I shall attempt to record the story &mdash; the testaments if you will &mdash;<br></br>of Colonel Krill and the Tentacle Cult.</p>
      <p><span style={{ fontSize: '3rem', margin: '0.35rem 5px -0.25rem 0', lineHeight: '.75', float: 'left', backgroundColor: '#242424', color: 'white', padding: '0.25rem' }}>T</span>he story begins more than 150 years ago at the height of the British Empire in India when Colonel Krill was first tasked with the unenviable job of eradicating what Lord Curzon deemed to be ‘devil worshiping cults’, but was really a purge of anything contrary to the western civilization ideals that the Victorian English felt was their God-given duty to spread throughout the world.</p>
      <p>It is the story of that man, Colonel Aloysius Krill, and his mad ambition to destroy the gods who are rejected. And my attempt to understand, and pass along, his reasons for doing so.</p>
      <p>This I record in &hellip;</p>
        
      <div style={{ fontStyle: 'italic', maxWidth: '800px', margin: '2rem auto', fontSize: '0.875rem' }}>
        <h1 style={{ fontSize: '1.25rem', textTransform: 'uppercase', color: 'white', backgroundColor: '#242424', padding: '0.25rem 0.5rem', textAlign: 'center' }}>The 64 TESTAMENTS of COL. ALOYSIUS KRILL and the TENTACLE CULT</h1>
        <h2 style={{ color: '#666', fontWeight: 'light', fontSize: '1rem', textAlign: 'center', marginTop: '-1rem' }}>(a collection of 64 novellas in 8 volumes)</h2>
        <dl style={{ display: 'none' }}>
        <dt>Vol. 1 &mdash; A PLAGUE UPON THE HOUSE OF GAYOMARD</dt>
        <dd>When the curator of the Scythian exhibit in the British Museum in London is brutally murdered, Col. Krill discovers that a mysterious artifact left by whomever &hellip; <em>or whatever</em> &hellip; mutilated the curator is tied to the sudden surge of demons and monsters around the globe, and may hold the key to breaking his curse.</dd>

        <dt>Vol. 2 &mdash; THE PROPHESIES OF MOBEDĀN MOBED</dt>
        <dd>Uncertain that his information is correct, Col. Krill seeks confirmation that the 'gods who are rejected' are indeed vulnerable. But, when he finds a passage in an ancient book that fortells of dark gods gaining their full strength to become invincible when XXXX, he decides he must find a way to destroy the dark gods behind his curse before time runs out.</dd>
        
        <dt>Vol. 3 &mdash; THE BLIND GODS</dt>
        <dd>Seeking answers to how he can destroy the 'gods who are rejected,' Col. Krill seeks out the <em>ahura</em> cults, worshipers of the 'gods of light,' but they refuse to help, claiming it is up to humanity to choose good or evil.</dd>
        
        <dt>Vol. 4 &mdash; THE RISE &amp FALL OF THE TENTACLE CULT</dt>
        <dd>Angered by the rejected of the <em>ahura</em>, Col. Krill devises a plan to lure the 'gods who are rejected' from their realm into the realm of humanity and trap them where he can destroy them. But the gods anticipate his plan and send their spawn, who destroy the Tentacle Cult and further strengthen the gods influence.</dd>
        
        <dt>Vol. 5 &mdash; THE MOORS OF KRILL MANOR</dt>
        <dd>Col. Krill is crushed by his failure to save and protect the cult from the spawn and retreats to his manor a broken man. Meanwhile, the high priest gains strength and continues to attack Col. Krill, who is remnded that he is the only one who can stop the 'gods who are rejected' from entering the realm of humanity and plunging it into eternal darkness.</dd>
        
        <dt>Vol. 6 &mdash; THE TRAP</dt>
        <dd>Recognizing his need to accept the blame for awakening the 'gods who are rejected,' Col. Krill hatches a new plan to recover the idol and use it to bait a trap that will pull them from their realm to the realm of humanity where he can destroy them. But, their power and influence on the realm of humanity has grown more than he expected and they escape his trap to fully enter our realm, with Col. Krill in their grasp and at their mercy.</dd>
        
        <dt>Vol. 7 &mdash; THE REALM OF NIGHTMARES</dt>
        <dd>Held captive by the high priest of the 'gods who are rejected', now in the realm of humanity, Col. Krill realizes that his trap can still work but will require him to escape into their realm of nightmares to their stronghold and destroy it. Doing so will destabilize them, leaving them weakened and vulnerable. With the help of his troops in the realm of nightmares, the gods can finally be crushed, the curse broken, and his troops freed. But it means his own eternal damnation.</dd>
        
        <dt>Vol. 8 &mdash; THE 13TH LANCERS</dt>
        <dd>The stronghold of the 'gods who are rejected' destroyed, Col. Krill finds himself sucked into the realm of humanity, his troops left behind; the doorway closing fast. He must gather the remaining members of the Tentacle Cult to help him pull his men out while stopping the gods from reentering their own realm and rebuilding their power to try again.</dd>
      </dl>
      </div>
      <p>But first, I must set the stage and explain, for those of you not experts in the ancient deities, who the ‘gods who are rejected’ were and how Col. Krill came to defy them.</p>
      <p>This I do in a collection of short stories entitled &hellip;</p>
      <div style={{ margin: '2rem auto', maxWidth: '800px' }}>
        <dl>
          <dt><span style={{ color: '#fff', backgroundColor: '#242424', padding: '0.25rem 0.5rem' }}>Vol. 0 &mdash; THE GODS WHO ARE REJECTED</span></dt>
          <dd style={{ fontStyle: 'italic', fontSize: '0.875rem', marginTop: '0.5rem' }}>Disturbed from their slumber when their temple was violated and a great sacrilege committed, the 'gods who are rejected' burn with unholy anger at the humans who tossed them aside. But an eternal curse upon the one who committed the sacrilege is not enough &hellip; the gods demand retribution upon all humanity and call upon their high priest, Mobedān Mobed, to tear open the barrier between their realm of nightmars and the realm of humanity so that they can enter and plunge the world into a new eternal darkness.</dd>  
        </dl>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <button style={{ boxShadow: '6px 6px 9px 3px rgba(36,36,36,1)', backgroundColor: 'white', margin: '0 auto', padding: '1rem', border: '1px solid #242424', borderRadius: '5px', textAlign: 'center' }}>Read THE GODS WHO ARE REJECTED</button>
      <div style={{ marginTop: '2rem', textAlign: 'left', fontSize: '0.875rem', width: '500px', margin: '0 auto', padding: '0' }}>
        <p>Email subscription required to access the stories. You will receive eight stories by email over eight days, plus have additional access to behind-the-scenes stories, opportunity to be a <em>beta</em> reader and/or part of the book launch team.</p>
        <p><em>Beta</em> readers &amp; launch team members get early (and sometimes free) access to new novellas before they are published. Help develop the stories as they are written and promote them to your network of reader friends.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
