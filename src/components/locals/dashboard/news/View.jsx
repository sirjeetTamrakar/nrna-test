const View = ({ data }) => {
  console.log('xcxxcxxcc', { data });
  return (
    // <ul>
    //   {Object.entries(data)?.map((list, index) => (
    //     <li key={index}>{list[0] + ' : ' + list[1]}</li>
    //   ))}
    // </ul>
    <ol style={{ paddingTop: '8px', paddingBottom: '8px' }}>
      {Object.entries(data)?.map((list, index) => (
        <li style={{ padding: '5px 0', textTransform: 'capitalize' }} key={index}>
          {list[0] + ' : ' + list[1]}
        </li>
      ))}
    </ol>
  );
};

export default View;
