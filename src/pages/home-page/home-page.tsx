import { Avatar, Icon, List, Skeleton, Switch } from 'antd';
import * as React from 'react';

import './home-page.scss';

class HomePage extends React.Component<any, IHomePageState> {

    constructor(props: React.Props<any>) {
        super(props);
        this.state = { articles: [], loading: false };
    }

    public componentWillMount() {
        fetch('http://localhost:8000/articles', {
            method: 'GET'
        }).then(res => res.json()).then(res => {
            this.setState({ articles: res });
            // tslint:disable-next-line:no-console
            console.log(res);
        });
    }

    public onChange = (checked: boolean) => {
        this.setState({ loading: !checked });
    }

    public render() {
        const { loading } = this.state;

        const IconText = ({ type, text }: { type: string, text: string }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );

        return (
            <div className="content">
                <Switch checked={!loading} onChange={this.onChange} />
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.state.articles}
                    // tslint:disable-next-line:jsx-no-lambda
                    renderItem={(item: any) => (
                        <List.Item
                            key={item.title}
                            // tslint:disable-next-line:jsx-key
                            actions={(!loading ? true : undefined) && [<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                            extra={!loading && <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}>
                            <Skeleton loading={loading} active={true} avatar={true}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

interface IHomePageState {
    loading: boolean,
    articles: IArticle[]
}

interface IArticle {
    "id": number,
    "title": string,
    "author": string,
    "content": string
}

export default HomePage;
