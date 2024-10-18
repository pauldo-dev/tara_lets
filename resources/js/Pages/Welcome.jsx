import { Link } from '@inertiajs/react';
import Button from '@/Components/Button';
import "../../sass/Landing.scss";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-heading">Welcome to TARA ATBI Portal</h1>
        <h2 className="landing-subheading">
          Discover amazing features and possibilities
        </h2>
        <div className="landing-buttons">
          <Link href={route('login')}>
            <Button 
              variant="primary" 
              className="login-button rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
              Log in
            </Button>
          </Link>
          <Link href={route('register')}>
            <Button 
              variant="outlineGreen" 
              className="register-button rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
