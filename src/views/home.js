import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <a href="#SaveTheDate" className="home-link">
                Save The Date
              </a>
              <a href="#Details" className="home-link01">
                Details
              </a>
              <a href="#Venue" className="home-link02">
                Venue &amp; Time
              </a>
              <a href="#RSVP" className="home-link03">
                RSVP
              </a>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <a href="#SaveTheDate" className="home-link04">
                  Save The Date
                </a>
                <a href="#Details" className="home-link05">
                  Details
                </a>
                <a href="#Venue" className="home-link06">
                  Venue
                </a>
                <a href="#RSVP" className="home-link07">
                  RSVP
                </a>
              </nav>
              <div data-thq="thq-close-menu" className="home-close-menu1"></div>
            </div>
          </div>
        </header>
        <div className="home-navbar">
          <div className="home-middle-nav">
            <a href="#Details" className="home-link08">
              <span className="Anchor">Details</span>
              <br></br>
            </a>
            <span className="home-link09">
              <span className="Anchor">Venue &amp; Time</span>
              <br></br>
            </span>
            <a href="#RSVP" className="home-link10">
              <span className="Anchor">RSVP</span>
              <br></br>
            </a>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div id="SaveTheDate" className="home-save-the-date">
        <img
          alt="image"
          src="/cover3-edit2-1400w.jpg"
          loading="eager"
          className="home-image"
        />
      </div>
      <div className="home-section-separator1"></div>
      <div id="Details" className="home-details">
        <div className="home-container01">
          <span className="home-text06">
            <span className="home-text07">
              Assalamualaikum &amp; Salam Sejahtera
            </span>
            <br></br>
          </span>
          <span className="home-text09">
            <span className="home-text10">
              Sejambak bunga kami hulurkan, Semekar senyuman seikhlas hati,
            </span>
            <br className="home-text11"></br>
            <span className="home-text12">
              Dengan penuh kesyukuran kehadrat ilahi, kami
            </span>
            <br></br>
          </span>
          <span className="home-text14">
            <span className="home-text15">Mohd Johari Bin Alias</span>
            <br className="home-text16"></br>
            <span className="home-text17">&amp;</span>
            <br className="home-text18"></br>
            <span className="home-text19">Norwiza Binti Ahmad Bedawi</span>
            <br className="home-text20"></br>
          </span>
          <span className="home-text21">
            <span className="home-text22">
              Dengan segala hormatnya kami mempersilakan
            </span>
            <br></br>
            <br></br>
            <span className="home-text25">
              Dato&apos;/ Datin/ Tuan/ Puan/ Encik/ Cik
            </span>
            <br></br>
            <br></br>
            <span className="home-text28">
              ke majlis resepsi untuk meraikan majlis perkahwinan anakanda kami
            </span>
            <br></br>
            <br></br>
            <span className="home-text31">Muhammad Thaqif</span>
            <span className="home-text32">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span className="home-text34">dengan pasangannya</span>
            <br></br>
            <span className="home-text36">Siti Nadhirah</span>
            <span className="home-text37">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
          </span>
          <div className="home-container02">
            <div className="home-container03">
              <a
                href="https://waze.com/ul/hw0zeke4ds"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <img
                  alt="image"
                  src="https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw=w240-h480-rw"
                  className="home-image1"
                />
              </a>
            </div>
            <div className="home-container04">
              <div className="home-container05">
                <span className="home-text40">
                  <span className="home-text41">Larut Hillview Kabin,</span>
                  <br></br>
                  <span>
                    Jalan Nordin,Kampung Air Kuning,34000 Taiping,Perak
                  </span>
                </span>
              </div>
              <div className="home-container06">
                <img alt="image" src="/qr1-600w.png" className="home-image2" />
              </div>
            </div>
            <div className="home-container07">
              <a
                href="https://goo.gl/maps/mjDV3zevwFKaW2vw9"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <img
                  alt="image"
                  src="https://static-00.iconduck.com/assets.00/google-maps-old-icon-2048x2048-ulnfibe8.png"
                  className="home-image3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div id="Venue" className="home-venue">
        <div className="home-container08">
          <div className="home-container09">
            <div className="home-container10">
              <a
                href="https://waze.com/ul/hw0zeke4ds"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <img
                  alt="image"
                  src="https://play-lh.googleusercontent.com/r7XL36PVNtnidqy6ikRiW1AHEIsjhePrZ8W5M4cNTQy5ViF3-lIDY47hpvxc84kJ7lw=w240-h480-rw"
                  className="home-image4"
                />
              </a>
            </div>
            <div className="home-container11">
              <div className="home-container12">
                <span className="home-text44">
                  <span className="home-text45">Bertempat di :</span>
                  <br className="home-text46"></br>
                  <br className="home-text47"></br>
                  <span className="home-text48">Larut Hillview Kabin,</span>
                  <br></br>
                  <span className="home-text50">J</span>
                  <span className="home-text51">alan Nordin,</span>
                  <br className="home-text52"></br>
                  <span className="home-text53">Kampung Air Kuning,</span>
                  <br className="home-text54"></br>
                  <span className="home-text55">34000 Taiping,Perak</span>
                </span>
              </div>
              <div className="home-container13">
                <img alt="image" src="/qr1-600w.png" className="home-image5" />
              </div>
            </div>
            <div className="home-container14">
              <a
                href="https://goo.gl/maps/mjDV3zevwFKaW2vw9"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14"
              >
                <img
                  alt="image"
                  src="https://static-00.iconduck.com/assets.00/google-maps-old-icon-2048x2048-ulnfibe8.png"
                  className="home-image6"
                />
              </a>
            </div>
          </div>
          <div className="home-container15">
            <span className="home-text56">
              <span className="home-text57">Tarikh :</span>
              <br></br>
            </span>
            <span className="home-text59">
              <span className="home-text60">12 November 2023</span>
              <br></br>
            </span>
            <span className="home-text62">
              <span>Sunday</span>
              <br></br>
            </span>
          </div>
          <div className="home-container16">
            <span className="home-text65">
              <span>Masa :</span>
              <br></br>
            </span>
            <span className="home-text68">11:30 pagi - 3:30 petang</span>
          </div>
          <div className="home-container17">
            <span className="home-text69">
              <span>Hubungi :</span>
              <br></br>
            </span>
            <span className="home-text72">
              <span>Johari - 0135203947</span>
              <br></br>
              <span>Norwiza - 0135131216</span>
              <br></br>
              <span>Afiqah - 0135303947</span>
              <br></br>
              <span>Ayu - 0125562708</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div id="RSVP" className="home-rsvp">
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfTMPQhvIHDYfSDoYRV5eZezfNPoU0xMwAFi7n4zSHrS-cV1A/formResponse"
          method="POST"
          enctype="application/x-www-form-urlencoded"
          className="home-form"
        >
          <div className="home-content-container">
            <div className="home-form-container">
              <span className="home-heading BigCard-Heading">
                We are looking forward to seeing you there!
              </span>
              <input
                type="text"
                name="entry.818473367"
                required="true"
                placeholder="Name"
                className="home-name input"
              />
              <input
                type="text"
                name="entry.575691230"
                required="true"
                placeholder="Contact Number"
                className="home-contact-number input"
              />
              <textarea
                name="entry.254453796"
                placeholder="Your Wish"
                className="home-message textarea"
              ></textarea>
              <select name="entry.1944928338" required className="home-select">
                <option value="1" selected>
                  Total pax 1
                </option>
                <option value="2">Total pax 2</option>
              </select>
              <button type="submit" className="home-cta-btn Anchor button">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
      <div id="process" className="home-services">
        <div className="home-heading-container">
          <h1 className="home-text81 Section-Heading">
            More things to explore
          </h1>
          <span className="home-text82 Section-Text">
            Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-service-card">
            <h3 className="home-text83 Card-Heading">Resources</h3>
            <span className="home-text84 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="Anchor">Learn more</span>
          </div>
          <div className="home-service-card1">
            <h3 className="home-text85 Card-Heading">Community</h3>
            <span className="home-text86 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="Anchor">Learn more</span>
          </div>
          <div className="home-service-card2">
            <h3 className="home-text87 Card-Heading">Newsroom</h3>
            <span className="home-text88 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="Anchor">Learn more</span>
          </div>
        </div>
      </div>
      <div className="home-section-separator4"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="home-link18">
              <span className="Anchor home-text89">
                2023 WedQifNad | All Rights Reserved
              </span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
