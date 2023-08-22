const View = ({ data }) => {
  return (
    <ul>
      {Object.entries(data)?.map((list, index) => (
        <li key={index}>{list[0] + ' : ' + list[1]}</li>
      ))}
    </ul>
  );
};

export default View;
