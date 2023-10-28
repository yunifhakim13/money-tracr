export default function ({
  textLabel,
  dinamisOption,
  onChange,
  className,
  parentClass,
}) {
  return (
    <>
      <div className={parentClass}>
        <label>{textLabel}</label>
        <select className={className} onChange={onChange}>
          {dinamisOption.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
