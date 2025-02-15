

const EmployerDashboard = () => {
  const [job, setJob] = useState({ title: '', description: '', location: '', salary: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/jobs/post', job)
      .then(res => alert('Job posted successfully!'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Employer Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        />
        <textarea
          placeholder="Job Description"
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Salary"
          value={job.salary}
          onChange={(e) => setJob({ ...job, salary: e.target.value })}
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default EmployerDashboard;