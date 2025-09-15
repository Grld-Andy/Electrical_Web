import React from 'react'

interface Props {
  text: string
  image: string
}

const PageHeader: React.FC<Props> = ({ text, image }) => {
  return (
    <div
      className="bg-cover bg-center h-[320px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="bg-black/50 w-full h-full flex items-center justify-center">
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            relative uppercase font-extrabold top-12 tracking-wide text-shadow-lg text-center
          "
        >
          {text}
        </h1>
      </div>
    </div>
  )
}

export default PageHeader
