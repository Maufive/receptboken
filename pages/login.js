import Link from 'next/link';
import Login from '../components/Login';

const LoginPage = props => (
  <div>
    <Login props={props} />
    <Link href="/"><a>⟵ Back to start</a></Link>
  </div>
);

export default LoginPage; 