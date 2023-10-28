export default function ({
  children,
  type,
  value,
  placeholder,
  onChange,
  name,
  className,
  parentInput,
}) {
  return (
    <>
      <div className={parentInput}>
        <label>{children}</label>
        <input
          className={className}
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
