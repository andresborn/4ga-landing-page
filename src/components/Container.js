import React from "react";
import PropTypes from "prop-types";
import { Card } from "./Card.js"


export const Container = props => {
	return (
		<div className="container container-fluid d-flex justify-content-between">
            <Card imgUrl="https://upload.wikimedia.org/wikipedia/commons/3/33/Are_You_Experienced_-_US_cover-edit.jpg"
            alt="Are you experienced album cover"
            title="Are you experienced?"
            content="Are You Experienced is the debut studio album by the Jimi Hendrix Experience. Released in 1967, the LP was an immediate critical and commercial success, and it is widely regarded as one of the greatest debuts in the history of rock music. The album features Jimi Hendrix's innovative approach to songwriting and electric guitar playing which soon established a new direction in psychedelic and hard rock music."
            link="https://en.wikipedia.org/wiki/Are_You_Experienced"
            label="Wikipedia" />
      <Card imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Axiscover.jpg/220px-Axiscover.jpg"
            alt="Axis: Bold as Love album cover"
            title="Axis: Bold as Love"
            content="Axis: Bold as Love is the second studio album by the Jimi Hendrix Experience. Track Records first released it in the United Kingdom in December 1, 1967, only seven months after the release of the group's highly successful debut, Are You Experienced. In the United States, Reprise Records delayed the release until the following month. The album reached the top ten in the album charts in both countries. "
            link="https://en.wikipedia.org/wiki/Axis:_Bold_as_Love"
            label="Wikipedia" />
      <Card imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jimi_Hendrix_-_Electric_Ladyland.jpg/220px-Jimi_Hendrix_-_Electric_Ladyland.jpg"
            alt="Electric Ladyland album cover"
            title="Electric Ladyland"
            content="Electric Ladyland is the third and final studio album by the Jimi Hendrix Experience and the final studio album released in Hendrix's lifetime before his death in 1970. Released by Reprise Records in North America on October 16, 1968, and by Track Records in the UK nine days later, the double album was the only record from the band produced by Hendrix. By mid-November, it had charted at number one in the US, where it spent two weeks at the top spot. Electric Ladyland was the Experience's most commercially successful release and their only number one album. It peaked at number six in the UK, where it spent 12 weeks on the chart."
            link="https://en.wikipedia.org/wiki/Electric_Ladyland"
            label="Wikipedia" />
		</div>
	);
};

