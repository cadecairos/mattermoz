// Copyright (c) 2015 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

var SearchStore = require('../stores/search_store.jsx');
var ChannelStore = require('../stores/channel_store.jsx');
var UserStore = require('../stores/user_store.jsx');
var UserProfile = require('./user_profile.jsx');
var utils = require('../utils/utils.jsx');
var EventHelpers = require('../dispatcher/event_helpers.jsx');
var Constants = require('../utils/constants.jsx');
var TextFormatting = require('../utils/text_formatting.jsx');
var ActionTypes = Constants.ActionTypes;

export default class SearchResultsItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        EventHelpers.emitPostFocusEvent(this.props.post.id);
    }

    render() {
        var channelName = '';
        var channel = ChannelStore.get(this.props.post.channel_id);
        var timestamp = UserStore.getCurrentUser().update_at;

        if (channel) {
            channelName = channel.display_name;
            if (channel.type === 'D') {
                channelName = 'Direct Message';
            }
        }

        const formattingOptions = {
            searchTerm: this.props.term,
            mentionHighlight: this.props.isMentionSearch
        };

        return (
            <div
                className='search-item-container post'
                onClick={this.handleClick}
            >
                <div className='search-channel__name'>{channelName}</div>
                <div className='post-profile-img__container'>
                    <img
                        className='post-profile-img'
                        src={'/api/v1/users/' + this.props.post.user_id + '/image?time=' + timestamp + '&' + utils.getSessionIndex()}
                        height='36'
                        width='36'
                    />
                </div>
                <div className='post__content'>
                    <ul className='post-header'>
                        <li className='post-header-col'><strong><UserProfile userId={this.props.post.user_id} /></strong></li>
                        <li className='post-header-col'>
                            <time className='search-item-time'>
                                {utils.displayDate(this.props.post.create_at) + ' ' + utils.displayTime(this.props.post.create_at)}
                            </time>
                        </li>
                    </ul>
                    <div className='search-item-snippet'>
                        <span
                            onClick={this.handleClick}
                            dangerouslySetInnerHTML={{__html: TextFormatting.formatText(this.props.post.message, formattingOptions)}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

SearchResultsItem.propTypes = {
    post: React.PropTypes.object,
    isMentionSearch: React.PropTypes.bool,
    term: React.PropTypes.string
};
