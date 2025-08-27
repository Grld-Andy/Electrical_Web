import React from 'react'

interface Props{
    text: string
}

const PageHeader: React.FC<Props> = ({text}) => {
  return (
    <div
        className="bg-cover bg-center h-[280px] flex items-center justify-center text-white"
        style={{
        backgroundImage: "url('/aboutbanner.jpg')",
        }}
    >
        <div className="bg-black/50 bg-opacity-0 w-full h-full flex items-center justify-center">
        <h1 className="text-5xl relative uppercase font-extrabold top-12 tracking-wide text-shadow-lg">
            {text}
        </h1>
        </div>
    </div>
  )
}

export default PageHeader