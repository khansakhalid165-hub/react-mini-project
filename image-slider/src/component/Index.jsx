import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function Imageslider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      setErrorMsg(null);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      setImages(Array.isArray(data) ? data : []);
    } catch (e) {
      setErrorMsg(e.message || "Unable to load images");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) {
      fetchImage(url);
    }
  }, [url, limit]);

  function handlePrevious() {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.max(images.length - 1, 0) : prev - 1,
    );
  }

  function handleNext() {
    setCurrentSlide((prev) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );
  }

  function goToSlide(index) {
    setCurrentSlide(index);
  }

  const activeImage = images[currentSlide];

  if (loading) {
    return (
      <div className="flex min-h-90 items-center justify-center p-6 text-sm text-slate-500">
        Loading images, please wait...
      </div>
    );
  }
  
  if (errorMsg) {
    return (
      <div className="flex min-h-90 items-center justify-center p-6 text-sm text-red-600">
        Error occurred: {errorMsg}
      </div>
    );
  }
  
  if (!images.length) {
    return (
      <div className="flex min-h-90 items-center justify-center p-6 text-sm text-slate-500">
        No images available.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] bg-slate-950 shadow-2xl shadow-slate-900/10">
        <img
          src={activeImage.download_url}
          alt={activeImage.author || "Selected slide"}
          className="h-130 w-full object-cover transition duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

        <div className="absolute inset-x-0 top-6 flex items-center justify-between px-4 sm:px-6">
          <button
            onClick={handlePrevious}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/90 text-slate-900 shadow-lg shadow-slate-950/10 transition hover:bg-white"
            aria-label="Previous slide"
          >
            <BsArrowLeftCircle className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/90 text-slate-900 shadow-lg shadow-slate-950/10 transition hover:bg-white"
            aria-label="Next slide"
          >
            <BsArrowRightCircle className="h-6 w-6" />
          </button>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === currentSlide
                  ? 'bg-white shadow-lg shadow-white/20'
                  : 'bg-white/40 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-3xl bg-white/90 p-5 shadow-lg shadow-slate-950/5 backdrop-blur-sm sm:p-6">
        <div className="flex flex-col gap-2 text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Image from API</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {activeImage.author || 'Unknown author'}
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            Slide {currentSlide + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
