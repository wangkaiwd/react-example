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
// 总结：react中并没对路由跳转进行?key=value形式的处理，使用路由进行参数传递需要自己简单封装处理

// 官网介绍：
// React Router does not have any opinions about how your parse URL query strings. 
// Some applications use simple key=value query strings, but others embed arrays and objects in the query string. 
// So it's up to you to parse the search string yourself.
// In modern browsers that support the URL API, you can instantiate a URLSearchParams object from location.search and use that.
// In browsers that do not support the URL API (read: IE) you can use a 3rd party library such as query-string.

//  react router 对于你如何解析URL query strings没有任何建议
// 一些应用使用简单的key=value键值对query strings,但是其它的可能会在query string中嵌入数组和对象
// 因此，如何解析查询query string取决于你自己
// 在现代浏览器中支持URL API,你能实例化一个URLSearchParams对象来从location.search中获取并使用它们
// 在不支持URL API的浏览器中，你可以使用第三方库，例如query-string

// 实践： 1. 不能在pathname中通过?的形式再地址后拼接参数，这样即使页面路由会进行跳转，但是对应的组件并不会加载
//       2. 在使用BrowserRouter时，通过state的传参可以保存在历史中，
//          而使用HashRouter时，通过state和query传递的参数只在当时生效，刷新页面就会消失
//       这与之前的版本有很大的区别，并没有为开发者做内部封装

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
            <Redirect
              to={{
                pathname: `/priviteRoute/login`,
                search: `?from=${props.location.pathname}`
              }}
            />
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
        <p>You must log in to view the page at {from}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;