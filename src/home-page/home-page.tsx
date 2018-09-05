import * as React from 'react';
import './home-page.scss';

class HomePage extends React.Component<any, IHomePageState> {

    constructor(props: React.Props<any>) {
        super(props);
        this.state = { items: [1, 2] };
    }

    public render() {
        return [
            <h2 key="">HOME</h2>,
            <div key="" className="articleList">
                {this.state.items.map(item => <div className="article" key={item} />)}
            </div>
        ];
    }
}

interface IHomePageState {
    items: number[]
}

export default HomePage;
