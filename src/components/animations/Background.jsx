export default function Background() {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">

      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-sky-500/10
          rounded-full
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-20
          bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

    </div>
  );
}