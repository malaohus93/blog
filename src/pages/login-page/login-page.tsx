import * as React from 'react';
import './login-page.scss';

class LoginPage extends React.Component<any, ILoginPageState> {

  constructor(props: React.Props<any>) {
    super(props);
    this.state = { items: [1, 2] };
  }

  public render() {
    return (
      <h2>LOGIN</h2>
    );
  }
}

interface ILoginPageState {
  items: number[]
}

export default LoginPage;
