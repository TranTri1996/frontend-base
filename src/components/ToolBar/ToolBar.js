import React from 'react';
import {PureComponent} from 'react';

const cls = 'toolbar';

class ToolBar extends PureComponent {
    render() {
        return (
            <div className={cls}>This is toolbar</div>
        );
    }
}

export default ToolBar;
