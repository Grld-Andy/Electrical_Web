const LineBackgroundPattern = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full stroke-slate-200/80 
                 [mask-image:radial-gradient(circle_at_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="light-pattern"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          {/* Simple cross grid */}
          <path d="M60 0L0 0 0 60" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#light-pattern)"
      />
    </svg>
  )
}

const DotBackgroundPattern = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full stroke-slate-200/80 
                 [mask-image:radial-gradient(circle_at_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="light-pattern"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          {/* Simple cross grid */}
          <path d="M60 0L0 0 0 60" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#light-pattern)"
      />
    </svg>
  )
}

export { LineBackgroundPattern, DotBackgroundPattern }
