interface InfoBoxProps {
  title: string,
  src: string,
  text: string[],
  alt: string
}

export default function InfoBox(props: InfoBoxProps) {
  const { title, src, text, alt } = props;

  return (
    <div className="mx-20 my-10 border rounded-3xl border-slate-500 flex transition ease-in-out delay-90 hover:bg-indigo-900 hover:scale-110">
      <div className="text-3xl my-7 ml-7 min-w-5 text-white self-center">
        <div className="flex justify-center">
          {title}
        </div>
        <img src={src} alt={alt} className="max-w-80 border border-transparent rounded-3xl my-7"/>
      </div>
      <ul className="gap-2 my-7 mx-7 list-disc text-slate-400 self-center">
        {
          text.map((val: string) => {return <li className="mb-4 ml-7 max-w-md">{val}</li>})
        }
      </ul>
    </div>
  )
}
