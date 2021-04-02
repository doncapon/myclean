import React , {Component, Fragment } from 'react';   
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


class ChooseUsTab extends Component{
	render(){

		return(
			<Fragment>
				<div className="base_header_2">
					<h3>Why Choosing us?</h3>
				</div>
				<Accordion preExpanded={['a']}>
					<AccordionItem uuid="a">
						<AccordionItemHeading>
							<AccordionItemButton>
								Do I have to be home when the cleaner comes?
							</AccordionItemButton>
						</AccordionItemHeading>
						
						<AccordionItemPanel>
						One two three four five six seven eight Sclemeel of schlemazel hasen after feffer incorporated. Here he comes Here comes Speed Racer. He a demon on wheels four five six seven eight Sclemeel of schlemazel
						</AccordionItemPanel>
					</AccordionItem>

					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								How often should I have my home cleaned?
							</AccordionItemButton>
						</AccordionItemHeading>

						<AccordionItemPanel>
							One two three four five six seven eight Sclemeel of schlemazel hasen after feffer incorporated. Here he comes Here comes Speed Racer. He a demon on wheels four five six seven eight Sclemeel of schlemazel
						</AccordionItemPanel>
					</AccordionItem>

					<AccordionItem>
						<AccordionItemHeading>
							<AccordionItemButton>
								Do I have to be home when the cleaner comes?
							</AccordionItemButton>
						</AccordionItemHeading>

						<AccordionItemPanel>
							One two three four five six seven eight Sclemeel of schlemazel hasen after feffer incorporated. Here he comes Here comes Speed Racer. He a demon on wheels four five six seven eight Sclemeel of schlemazel
						</AccordionItemPanel>
					</AccordionItem>
				</Accordion>
			</Fragment>
		)
	}
};

export default ChooseUsTab;
