const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
    <h2 style={{ color: 'blue' }}>{props.name}</h2>
    <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
    <p>Bio: {props.bio}</p>
  </div>
  );
};

// Prop validation
UserProfile.propTypes = {
  name: "string",
  age: "number",
  bio: "string",
};

export default UserProfile;
