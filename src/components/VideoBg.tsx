const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4'

const VideoBg = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="scale-[1.15] origin-top w-full h-full">
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className="w-full h-full object-cover object-top"
      />
    </div>
  </div>
)

export default VideoBg
