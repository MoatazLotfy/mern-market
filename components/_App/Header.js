import { Menu, Container ,Image ,Icon} from 'semantic-ui-react';
import Link from 'next/link';
import Router,{useRouter} from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  return NProgress.start();
}

Router.onRouteChangeComplete = () => {
  return NProgress.done();
}

Router.onRouteChangeError = () => {
  return NProgress.done();
}

function Header() {
  const router = useRouter();
  const user = true;

  function isActive(route){
    if (route === router.pathname){
      return true;
    }
    else {
      return false;
    }
  }

  return (
    <Menu fluid inverted id="menu">
      <Container text>
      <Link href="/">
        <Menu.Item header active = {isActive("/")}>
        <Image size="mini" src="/static/logo.svg" style={{marginRight : "1em"}}/>
        Market
        </Menu.Item>
      </Link>

      <Link href="/cart">
        <Menu.Item header active = {isActive("/cart")}>
        <Icon size="large" name="cart"/>
        Cart
        </Menu.Item>
      </Link>
      {user ?(<>
      <Link href="/create">
        <Menu.Item header active = {isActive("/create")}>
        <Icon size="large" name="add square"/>
        Create
        </Menu.Item>
      </Link>

     <Link href="/account">
        <Menu.Item header active = {isActive("/account")}>
        <Icon size="large" name="user"/>
        Account
        </Menu.Item>
      </Link>

      
        <Menu.Item header >
        <Icon size="large" name="sign out"/>
        Logout
        </Menu.Item>
      </>)
      :
      (<>
      <Link href="/login">
        <Menu.Item header active = {isActive("/login")}>
        <Icon size="large" name="sign in"/>
        Login
        </Menu.Item>
      </Link>

      <Link href="/signup">
        <Menu.Item header active = {isActive("/signup")}>
        <Icon size="large" name="signup"/>
        Signup
        </Menu.Item>
      </Link>
      </>)}

      </Container>
    </Menu>
  );
}

export default Header;
