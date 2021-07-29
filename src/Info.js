
function Info() {
  const title = "This is my title";
  const showTitle = true;

  if (showTitle) {
    return (
      <div className="info">
        <h1 className="head"> {showTitle ? title : "no title"}</h1>
        <p>Manage your stuff here.</p>
      </div>
    );
  } else {
    return <p>nothing</p>;
  }
}

export default Info;
