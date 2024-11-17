const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
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
