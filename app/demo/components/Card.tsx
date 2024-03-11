interface CardProps {
  id: number,
  src: string,
  title: string,
  text: string,
  alt: string
}

export default function Card(props: CardProps) {
  const { id, src, title, text, alt } = props;

  return (
    <div className="my-7 mx-7">
      <div className="max-w-sm bg-white text-black font-semibold text-sm border rounded-3xl flex flex-col items-center gap-1 transition ease-in-out delay-90 hover:scale-110">
        <div>
          <img className="max-w-xs border rounded-3xl" key={id} src={src} alt={alt}/>
        </div>
        <div>
          {title}
        </div>
      </div>
    </div>
  )
}
