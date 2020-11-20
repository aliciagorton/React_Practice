import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import Img from '../document/img.jpeg'

function About() {
   const StyledAboutSection = styled.section`
     max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
   const StyledText = styled.div`
     ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
   }
   }`;

   const StyledPic = styled.div`
      position: relative;
      max-width: 300px;
      @media (max-width: 768px) {
      margin: 50px auto 0;
      width: 70%;
      }
    .img {
      position: relative;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
    }
}`;

   // const skills = ['JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'WordPress'];

  return (
   <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
            <div>
               <p>
               A recent graduate of a Full Stack Web Developer bootcamp taught by UC Davis, with a MERN focus. Passionate to merge professional background in healthcare with technology.  Adept communicator, organizer, and problem solver. Confident in ability to utilize learned skills and ability to strengthen any team. 
               </p>
               <p>
               Expert in customer service and client satisfaction. Trained at prioritizing tasks, being efficient with time and dealing in high stress environments. Previously a nurse and behavioral technician specializing in children who have Autism. Those experiences have enabled a strong sense of self and what others may need but can’t always articulate. Aim to build better software experiences, driven to make a difference, motivated to work as part of a team to diagnose and solve complex problems. 
               </p>
               <p>Here are a few technologies I've been working with recently:</p>
            </div>

            {/* <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul> */}

         </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img src='../images/img.jpeg' alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  )
};
  
      
export default About;