export default function Buttons({data}) {
  return (
    <div>
      {data.map((item) => (
        <button style={{gap: '1rem', padding: '0.5rem', margin:"1rem"}}key={item.id}>
          {item.title}
        </button>
      ))}
    </div>
  );
}