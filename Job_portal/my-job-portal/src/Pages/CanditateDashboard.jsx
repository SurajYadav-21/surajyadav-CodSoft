
const CandidateDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get('/api/applications')
      .then(res => setApplications(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Candidate Dashboard</h1>
      <h2>Your Applications</h2>
      {applications.map(app => (
        <div key={app._id}>
          <h3>{app.job.title}</h3>
          <p>Status: {app.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CandidateDashboard;