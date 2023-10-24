export default function ({ textLabel, dinamisOption }) {
  return (
    <>
      <div className="text-white pb-4">
        <label className="pb-1">{textLabel}</label>
        <select className="form-control">
          {dinamisOption.map((dinamisOption, index) => (
            <option key={index} value={dinamisOption}>
              {dinamisOption}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
