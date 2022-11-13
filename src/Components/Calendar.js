import React, { Component }  from 'react';
import cal from '../images/cal01.PNG'
import '../App.css';
import './styles.css'

function Event(props) {
  return (
    <div>
        <b>{props.name}</b> ({props.date}): <font size="4">{props.desc} ---- </font>
      <a
        className="link"
        href={props.website}
        target="_blank"
        rel="noopener noreferrer"
      >
     website
   </a>
   <br></br>
   <br></br>
   </div>
  );
}

export default function Calendar() {
  return <cal className="calendar">
    <br></br>
    <Event 
      name="Second Sundays" 
      association="Pioneer Works" 
      date="Nov. 13" 
      website="https://pioneerworks.org/programs/second-sundays-november-2022"
      desc="signature event series that engages Pioneer Works disciplines through live music, food, artist’s open studios, and programs' open studios"
    />
     <Event 
      name="SVA MFA Computer Arts Open Studio" 
      association="SVA MFA Computer Arts" 
      date="Nov. 17" 
      website="https://www.eventbrite.com/e/school-of-visual-arts-sva-mfa-computer-arts-open-studio-fall-2022-tickets-445543461487?aff=ebdssbdestsearch"
      desc="School of Visual Arts (SVA) presents the MFA Computer Arts Open Studio Fall 2022, bringing together multidisciplinary projects from our students. "
    />
     <Event 
      name="Open Studios: Curated by Doménica García" 
      association="Center for Performance Research" 
      date="Nov. 17" 
      website="https://www.eventbrite.com/e/open-studios-curated-by-domenica-garcia-tickets-403159329407?aff=erelexpmlt"
      desc="Evening of multidisciplinary artists to share works-in-progress. The performances will be followed by an open discussion with the artists and audience. Artists to be announced."
    />
     <Event 
      name="CURRENT WORK | NYC: BUILDING COMMUNITY" 
      association="Cooper Union The Architectural League of New York" 
      date="Nov. 15" 
      website="https://cooper.edu/events-and-exhibitions/events/current-work-nyc-building-community"
      desc="this event explores several new New York City community spaces and the diversity of programs, stakeholders, and constraints that have shaped their designs. Currently in various stages of completion, the featured projects represent a wide breadth of typologies, from large-scale athletic facilities to temporary neighborhood activations. The program will consist of five presentations by the projects’ architects and designers, followed by a moderated roundtable discussion."
    />
     <Event 
      name="KUNSTRAUM Open Studios" 
      association="KUNSTRAUM LLC " 
      date="Nov. 20" 
      website="https://www.eventbrite.com/e/kunstraum-open-studios-nov-20-2022-tickets-439944033447?aff=erelexpmlt"
      desc="Studios of our talented emerging and mid-career artists. Our community is comprised of both studio members and artists-in-residence, who work in a variety of media ranging from photography to sculpture, textiles, and painting."
    />
    <Event 
      name="Artists Sunday Open Studio event" 
      association="Karen Firtzgerald" 
      date="Nov. 27" 
      website="https://www.eventbrite.com/e/artists-sunday-open-studio-event-tickets-446018552497?aff=ebdssbdestsearch"
      desc="Our Open Studio features the work of Alison Cuomo and Karen Fitzgerald."
    />
    <Event 
      name="very big - huge" 
      association="Outlaw NYC" 
      date="Dec. 3" 
      website="https://www.outlawnyc.xyz/"
      desc="Techno night w/ Strahinja Arbutina (Croatia), Nebuchadnezza (San Francisco), Swap Meet! (Atlanta)"
    />
  </cal>
}

/*
<img className="calImage" src={cal}/>


  return <cal className="calendar">
    <Event 
      name="New York School of the Arts Open House" 
      association="NY School Of The Arts" 
      date="November 2" 
      website="https://www.eventbrite.com/e/new-york-school-of-the-arts-open-house-tickets-428786872077?aff=ebdssbdestsearch" 
      desc="An exhibition of works by our Faculty Members, an Open Studio Night for our Arts Intensive Students and HUB Members as well as live demonstrations by several of our Faculty Members."
    />
  </cal>

  <div className="bottom-left">Bottom Left</div>
      <div className="top-left">Top Left</div>
      <div className="top-right">Top Right</div>
      <div className="bottom-right">Bottom Right</div>
      <div className="centered">Centered</div>

*/
