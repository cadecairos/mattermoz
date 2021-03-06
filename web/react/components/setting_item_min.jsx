// Copyright (c) 2015 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {FormattedMessage} from 'mm-intl';

export default class SettingItemMin extends React.Component {
    render() {
        let editButton = null;
        if (!this.props.disableOpen) {
            editButton = (
                <li className='col-sm-2 section-edit'>
                    <a
                        className='theme'
                        href='#'
                        onClick={this.props.updateSection}
                    >
                        <i className='fa fa-pencil'/>
                        <FormattedMessage
                            id='setting_item_min.edit'
                            defaultMessage='Edit'
                        />
                    </a>
                </li>
            );
        }

        return (
            <ul
                className='section-min'
                onClick={this.props.updateSection}
            >
                <li className='col-sm-10 section-title'>{this.props.title}</li>
                {editButton}
                <li className='col-sm-7 section-describe'>{this.props.describe}</li>
            </ul>
        );
    }
}

SettingItemMin.propTypes = {
    title: React.PropTypes.node,
    disableOpen: React.PropTypes.bool,
    updateSection: React.PropTypes.func,
    describe: React.PropTypes.node
};
