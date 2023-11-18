import "./list.scss";
export default function SimpleList(props) {
  const items = props.listData.map((item) => {
    return (
      <li key={item.id} className="fancy-list__item">
        <figure>
          <div>
            <img src={item.download_url} />
          </div>
          <figcaption>{item.author}</figcaption>
        </figure>
      </li>
    );
  });
  const handleChangeSelection = (e) => {
    console.info("props", props);
    props.selectItem(e.target.value);
  };
  let optionsData = props.optionsData
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.author === value.author)
    )
    .map((item) => {
      return (
        <option key={item.id} value={item.author}>
          {item.author}
        </option>
      );
    });

  return (
    <div>
      <select onChange={(e) => handleChangeSelection(e)}>
        <option value="-1">Bitte wählen Sie</option>
        {optionsData}
      </select>
      <ul className="fancy-list">{items}</ul>
    </div>
  );
}
