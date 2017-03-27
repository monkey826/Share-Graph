import React from 'react';
import {
    Text
} from 'react-native';
import { connect } from 'react-redux';

class Performance extends React.Component {
    componentWillMount() {
        const iDs = this.getInstrumentIds();
        this.profileService.getPerformanceData(this.navParams.data.type, iDs).then(data => {
            this.data = data;
            this.helper.hideLoading(this);
        });
    }
    getInstrumentIds(compareData) {
        const lstInstrumentIDs = [];

        // this.globalVars.configData.common.instruments.forEach((item) => {
        //     lstInstrumentIDs.push(item.instrumentid);
        // });

        // compareData.forEach((item) => {
        //     lstInstrumentIDs.push(item.Id);
        // })

        return lstInstrumentIDs.toString();
    }
    render() {
        return (
            {
                this.props.performance &&
                <Text>
                    aaaa
                </Text>
            }
        )
    }
}

function mapStateToProps({ performance }) {
    return { performance };
}

export default connect(mapStateToProps)(Performance);