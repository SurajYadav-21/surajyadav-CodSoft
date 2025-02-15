
const Home = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs?featured=true')
      .then(res => setFeaturedJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Welcome to the Job Board!</h1>
      <h2>Featured Job Listings</h2>
      {featuredJobs.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default Home;