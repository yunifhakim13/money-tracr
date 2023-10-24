export default function ({
  children,
  type,
  value,
  placeholder,
  onChange,
  name,
}) {
  return (
    <>
      <div className="pb-4 text-white">
        <label className="pb-1">{children}</label>
        <input
          className="form-control"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          required
        />
      </div>
    </>
  );
}
