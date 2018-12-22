import React from "react";
import {
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

// 需求整理：
//   1. public路由就可以随意访问
//   2. protected路由需要登录后才能访问
//        1. 点击protected会对内容权限进行一个判断：有权限的话展示对应的组件，没有权限展示登录组件
//        2. 在加载到登录组件的时候，会通过state将来之前的路由地址传来，点击登陆后跳转到之前的路由

// 实现功能：登录之后可以跳转回之前的页面，而之前的页面是通过路由参数传递来的，没有传的话默认为根路径'/'
//          或者通过本地存储实现：跳转之前记录来之前的路径，存到本地存储中，到了登录页面之后，登陆之后将地址从
//          本地存储中取出，进行跳转

// 路由参数整理：使用hasRouter，不能通过state和query进行参数保留
//              使用browserRoter可以通过state进行参数保留
// 总结：使用路由进行参数传递需要自己简单封装处理

function AuthExample() {
  return (
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/priviteRoute/public">Public Page</Link>
        </li>
        <li>
          <Link to="/priviteRoute/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/priviteRoute/public" component={Public} />
      <Route path="/priviteRoute/login" component={Login} />
      <PrivateRoute path="/priviteRoute/protected" component={Protected} />
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
// 通过withRouter包装之后可以使用history对象
const Button = ({ history }) => {
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={
          () => {
            fakeAuth.signout(() => history.push("/priviteRoute"))
          }
        }
      >
        Sign out
      </button>
    </p>
  )
    :
    (
      <p>You are not logged in.</p>
    )
}
const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/priviteRoute"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <p>You are not logged in.</p>
      )
);
// 通过props属性传递来
// render:
function PrivateRoute({ component: Component, ...rest }) {
  const handleClick = (props) => {
    console.log('click', props)
    // props.history.push({
    //   pathname: '/priviteRoute/login',
    //   state: { value: '1234' },
    //   query: { from: props.location.pathname }
    // })
    console.log('to')
  }
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} /> // 如果校验通过的话展示Protected组件
        ) : (
            <span onClick={() => handleClick(props)}>to</span>
          )
      }
    />
  );
}

function Public() {
  return <h3>Public</h3>;
}

// Protected组件只有在login后才能看到
function Protected() {
  return <h3>Protected</h3>;
}

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    // 会让校验规则变为true，并且通过cb回调函数来将重定向定义为true
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    // 获取通过react-router中通过state传来的参数
    console.log('props', this.props)
    const params = new URLSearchParams(this.props.location.search);
    let from = params.get('from') || "/priviteRoute";
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        {/* <p>You must log in to view the page at {from.pathname}</p> */}
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;