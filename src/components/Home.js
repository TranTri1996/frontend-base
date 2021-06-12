import React, {PureComponent} from 'react';
import SideBar from './SideBar/SideBar';
import ToolBar from './ToolBar/ToolBar';

const cls = 'home';

class Home extends PureComponent {
    render() {
        return (
            <div className={cls}>
                <ToolBar />
                <SideBar />
            </div>
        );
    }
}

export default Home;
