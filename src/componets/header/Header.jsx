
export default function Header({title="Projects" , para="Where I showcase my latest and greatest web design work."}) {
  return (
    <div className="header text-center p-12!">
      <div className="info">
        <h2 className="text-3xl font-semibold text-white my-3!">{title}</h2>
        <p className="text-xl text-gray-400">{para}</p>
      </div>
    </div>
  );
}
