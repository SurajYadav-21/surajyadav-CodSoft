
const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/jobs">Job Listings</Link>
      <Link to="/employer-dashboard">Employer Dashboard</Link>
      <Link to="/candidate-dashboard">Candidate Dashboard</Link>
    </nav>
  );
};

export default NavBar;