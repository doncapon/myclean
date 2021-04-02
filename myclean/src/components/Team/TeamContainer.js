import React from 'react';
import SectionTitle from "../SectionTitles/SectionTitle";
import TeamList from  './TeamList'
import teamData from '../../data/Team/team'
 
import teamBg from '../../assets/images/team_bg.jpg' 
 
function Services({classes }) {    
    return (
		<section className={`team_section ${classes}`} 
        style={{backgroundImage: `url("${teamBg}")`}} > 
        	<div className="container">
				{/* Heading */} 
				<SectionTitle 
					title="Our Experts"
					subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter."
				/>
				{/* End: Heading */ }

				<div className="row"> 

					{
                        teamData.map(team=>(
                            <TeamList
                                key={team.id}  
                                img={team.img}
                                name={team.name}
                                designation={team.designation}
                                facebookUrl={team.facebookUrl} 
                                twitterUrl={team.twitterUrl} 
                                linkedinUrl={team.linkedinUrl} 
                            />
                        ))
                    }
	
				</div>
 
			</div>
		</section>

    );
}

export default Services;