import { useEffect, useRef, useState } from "react";

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');

  @keyframes fade-up { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }

  .cert-section { font-family: 'DM Sans', sans-serif; }
  .cert-hidden { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
  .cert-visible .anim { animation: fade-up 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards; }
  
  .cert-img-wrapper { cursor: pointer; transition: transform 0.3s ease; }
  .cert-img-wrapper:hover { transform: scale(1.02); }

  .lightbox-overlay {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.9); display: flex; align-items: center; justify-content: center;
    z-index: 1000; padding: 20px;
  }
`;

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-5 right-5 text-white text-3xl">
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
        </div>
      )}

      <section
        ref={ref}
        className={`cert-section w-full py-16 sm:py-24 px-5 sm:px-12 relative overflow-hidden ${isVisible ? "cert-visible" : ""}`}
        style={{
          backgroundColor: "#f4f7fd",
          backgroundImage:
            "radial-gradient(circle, rgba(26,58,143,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="cert-hidden anim mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6">
              Certificates &{" "}
              <span
                style={{
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(135deg, #1a3a8f, #1976d2, #42a5f5)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Accreditations
              </span>
            </h2>
            <p className="max-w-6xl mx-auto text-gray-600 px-2 sm:px-0">
              M & C Educational Consultancy is a government-recognized and
              officially registered MSME (Micro, Small & Medium Enterprise)
              under the Ministry of Micro, Small and Medium Enterprises, India.
              Our Udyam Registration affirms our commitment to offering reliable
              and professional educational services to aspiring students,
              particularly in the field of medical education abroad.{" "}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="cert-hidden anim flex justify-center">
                <div
                  className="cert-img-wrapper"
                  onClick={() => setSelectedImage("certificate1.svg")}
                >
                  <img
                    src="certificate1.svg"
                    alt="Certificate 1"
                    className="w-full max-w-85 sm:max-w-100 shadow-xl rounded-lg"
                  />
                </div>
              </div>

              <div className="cert-hidden anim flex justify-center">
                <div
                  className="cert-img-wrapper"
                  onClick={() => setSelectedImage("certificate2.svg")}
                >
                  <img
                    src="certificate2.svg"
                    alt="Certificate 2"
                    className="w-full max-w-85 sm:max-w-100 shadow-xl rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
