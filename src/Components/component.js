export const element = <h1>Holis</h1>;
export const element2 = (
  <div className="holi">
    <h2>Lulululu</h2>
  </div>
);
export const Appa = (_) => {
  const numeros = [1, 1, 3, 5, 7];
  return (
    <div>
      {numeros.map((n, key) => {
        return <p key={key}>{n}</p>;
      })}
    </div>
  );
};
