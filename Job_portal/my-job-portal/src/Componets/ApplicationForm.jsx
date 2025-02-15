

const ApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({ resume: '', coverLetter: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('resume', formData.resume);
    data.append('coverLetter', formData.coverLetter);

    axios.post(`/api/jobs/${jobId}/apply`, data)
      .then(res => alert('Application submitted!'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
      />
      <textarea
        placeholder="Cover Letter"
        value={formData.coverLetter}
        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
      />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplicationForm;