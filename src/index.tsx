import './index.css';
import { render } from 'solid-js/web';
import { A, Router } from '@solidjs/router';
import 'solid-devtools';
import { routes } from './routes';
import Navbar from './components/Navbar';

const Layout = (props: any) => {
  return (
    <>
      <header><Navbar routes={routes}/></header>
      <div class="main">{props.children}</div>
      <footer>
        <A href="https://linktree.com/rSpargo">©2025 Ryan Spargo</A>
      </footer>
    </>
  );
}

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <Router root={Layout}>{routes}</Router>, root!);
