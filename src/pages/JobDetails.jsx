import logo from "../assets/Img/logo.svg";
import { Link, useParams } from "react-router-dom";
import { getCareerJobBySlug } from "../data/careerJobs";

const getSocialLinks = (url) => [
  {
    name: "Facebook",
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M13.5 8.5V6.8c0-.7.5-.8.9-.8h2V3h-2.8c-3 0-3.7 2.2-3.7 3.6v1.9H8V12h1.9v9h3.6v-9h2.5l.3-3.5h-2.8z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: `https://x.com/intent/post?url=${encodeURIComponent(url)}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M18.9 3h2.9l-6.4 7.3L23 21h-6l-4.7-6.2L6.8 21H3.9l6.8-7.8L1 3h6.1l4.3 5.7L18.9 3zm-1.1 16h1.7L6.2 4.9H4.4L17.8 19z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: `https://www.linkedin.com/feed/?shareActive=true&url=${encodeURIComponent(url)}&shareUrl=${encodeURIComponent(url)}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M4.9 8.5h3.5V20H4.9V8.5zM6.7 3a2 2 0 110 4 2 2 0 010-4zm3.8 5.5h3.4V10h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5V20h-3.5v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20h-3.5V8.5z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M12 2.3a9.7 9.7 0 00-8.4 14.6L2 22l5.3-1.4A9.7 9.7 0 1012 2.3zm0 17.6c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1112 19.9zm4.4-6.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-1.3-.6-2.4-1.6-3.1-2.9-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.5c-.1-.1-.5-1.1-.7-1.5-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.5.1-.7.4-.2.3-.8.8-.8 2 0 1.1.8 2.1.9 2.3.1.2 1.6 2.6 4 3.6.5.2 1 .4 1.4.5.6.2 1.1.1 1.5.1.5-.1 1.2-.5 1.4-1 .2-.5.2-.9.2-1-.1-.1-.2-.2-.4-.2z" />
      </svg>
    ),
  },
];

export default function JobDetails() {
  const { jobSlug } = useParams();
  const job = getCareerJobBySlug(jobSlug);

  if (!job) {
    return (
      <main className="pt-30 px-6 pb-20 text-primary">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold">Job not found</h1>
          <p className="mt-3 text-[#4C4C4C]">
            This job posting is unavailable or was removed.
          </p>
          <Link
            to="/career"
            className="mt-8 inline-flex rounded-sm bg-[#53C22B] px-6 py-3 text-sm font-semibold text-white"
          >
            VIEW ALL JOBS
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="text-primary">
      <section className="bg-[#D5EE7B] px-6 py-10 sm:py-14">
        <Link to="/" className="absolute top-6 left-6 sm:left-12 z-[2]">
          <img src={logo} alt="Greengem" className="w-[120px] sm:w-[144px]" />
        </Link>

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold">{job.title}</h1>
          <Link
            to={`/career/${job.slug}/apply`}
            className="mt-6 inline-flex rounded-sm bg-primary px-6 py-3 text-xs font-semibold tracking-wide text-white"
          >
            I&apos;M INTERESTED
          </Link>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:gap-4">
            <span className="text-sm font-medium">SHARE IT TO</span>
            <div className="flex items-center gap-2 sm:gap-3">
              {getSocialLinks(window.location.href).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${item.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEEEEE] px-6 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-sm text-[#7A7A7A]">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <Link to="/career" className="hover:text-primary">
              Careers
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#53C22B]">Job details</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div className="lg:mr-16">
              <h2 className="text-[1.9rem] sm:text-4xl font-semibold">Job Description</h2>
              <p className="mt-5 text-2xl font-semibold">Responsibilities :</p>
              <ul className="mt-4 space-y-1 text-base md:text-md 3xl:text-lg leading-7 text-[#082233]">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 min-h-1.5 h-1.5 min-w-1.5 w-1.5 rounded-full bg-[#53C22B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-2xl font-semibold">Required Skills :</p>
              <ul className="mt-4 space-y-1 text-base md:text-md 3xl:text-lg leading-7 text-[#082233]">
                {job.responsibleSkill.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#53C22B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={`/career/${job.slug}/apply`}
                  className="rounded-sm bg-[#53C22B] px-6 py-3 text-xs font-semibold tracking-wide text-white"
                >
                  I&apos;M INTERESTED
                </Link>
                <Link
                  to="/career"
                  className="rounded-sm border border-primary px-6 py-3 text-xs font-semibold tracking-wide text-primary"
                >
                  VIEW ALL JOBS
                </Link>
              </div>
            </div>

            <aside>
              <h3 className="text-4xl font-semibold">Job Information</h3>
              <div className="mt-5 space-y-5 text-sm">
                <div>
                  <p className="text-[#6F6F6F]">Country</p>
                  <p className="mt-1 font-semibold">{job.country}</p>
                </div>
                <div>
                  <p className="text-[#6F6F6F]">Industry</p>
                  <p className="mt-1 font-semibold">{job.industry}</p>
                </div>
                <div>
                  <p className="text-[#6F6F6F]">Job Type</p>
                  <p className="mt-1 font-semibold">Regular | Full-time</p>
                </div>
                <div>
                  <p className="text-[#6F6F6F]">Hiring Status</p>
                  <p className="mt-1 font-semibold">Actively recruiting</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
