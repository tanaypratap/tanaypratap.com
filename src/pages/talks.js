import React from 'react';
import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';

class TalksIndex extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title={"Talks"}>
                <h3
                 style={{ marginBottom: rhythm(1/4)}}>
                 Talk 1
                 </h3>
            </Layout>
        )
    }
}

export default TalksIndex