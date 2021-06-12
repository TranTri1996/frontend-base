import React from 'react';
import {PureComponent} from 'react';

const cls = 'toolbar';

class ToolBar extends PureComponent {
    render() {
        return (
            <div className={cls}>Test the push rule</div>
        );
    }
}

export default ToolBar;
