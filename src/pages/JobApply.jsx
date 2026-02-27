import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCareerJobBySlug } from "../data/careerJobs";
import successImg from "../assets/Img/success.svg";
import logo from "../assets/Img/logo.svg";

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

export default function JobApply() {
  const { jobSlug } = useParams();
  const job = getCareerJobBySlug(jobSlug);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTakingLong, setIsTakingLong] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!job) {
    return (
      <main className="bg-[#EEEEEE] px-4 py-16 text-primary">
        <div className="mx-auto max-w-3xl rounded-sm border border-[#D5D8DA] bg-white p-8 text-center">
          <h1 className="text-4xl font-semibold">Job not found</h1>
          <Link
            to="/career"
            className="mt-6 inline-flex rounded-sm bg-[#53C22B] px-6 py-3 text-sm font-semibold text-white"
          >
            VIEW ALL JOBS
          </Link>
        </div>
      </main>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget; // Capture form element here
    setSubmitError("");
    setIsSubmitting(true);
    setIsTakingLong(false);

    // Show a message if submission takes more than 4 seconds
    const slowTimer = setTimeout(() => setIsTakingLong(true), 4000);

    const formData = new FormData(form);
    formData.append("_captcha", "false");
    formData.append("_subject", `Job Application - ${job.title}`);
    formData.append("jobTitle", job.title);
    formData.set("relocate", formData.get("relocate") ? "Yes" : "No");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/vnanthakumar00@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        },
      );

      if (!response.ok) {
        // Try to get error details from response
        const errorText = await response.text();
        console.error("FormSubmit Error Response:", response.status, errorText);
        throw new Error(`Submission failed with status ${response.status}`);
      }

      // If we got here, the request was successful
      try {
        const result = await response.json();
        console.log("FormSubmit Success Response:", result);
      } catch (jsonError) {
        // FormSubmit sometimes returns non-JSON or HTML even on the AJAX endpoint
        // but if response.ok is true, the email was likely sent.
        console.warn("Could not parse success response as JSON:", jsonError);
      }

      setApplicantName(String(formData.get("fullName") || "Candidate"));
      setShowSuccess(true);
      if (form) form.reset(); // Use captured form element
    } catch (error) {
      console.error("Submission error details:", error);
      setSubmitError("Unable to submit right now. Please try again.");
    } finally {
      clearTimeout(slowTimer);
      setIsSubmitting(false);
      setIsTakingLong(false);
    }
  };

  return (
    <>
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
      <main className="bg-[#EEEEEE] px-2 py-6 sm:px-4 sm:py-10 text-primary">
        <section className="mx-auto max-w-5xl mt-5 p-4 sm:p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-[#53C22B]">
                Personal Details
              </h1>
              <p className="mt-1 text-sm text-[#6F6F6F]">
                Applying for {job.title}
              </p>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm">
              <span>
                Full Name <span className="text-[#EB5757]">*</span>
              </span>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="block text-sm">
              <span>
                Email <span className="text-[#EB5757]">*</span>
              </span>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="block text-sm">
              <span>
                Contact <span className="text-[#EB5757]">*</span>
              </span>
              <input
                name="contact"
                type="tel"
                placeholder="Contact Number"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="block text-sm">
              <span>
                Gender <span className="text-[#EB5757]">*</span>
              </span>
              <select
                name="gender"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm text-[#737373]"
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>

            <label className="block text-sm">
              <span>
                Experience <span className="text-[#EB5757]">*</span>
              </span>
              <select
                name="experience"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm text-[#737373]"
                required
              >
                <option value="">Select Experience</option>
                <option>0-2 years</option>
                <option>3-5 years</option>
                <option>6-10 years</option>
                <option>10+ years</option>
              </select>
            </label>

            <label className="block text-sm">
              <span>
                Current Employer <span className="text-[#EB5757]">*</span>
              </span>
              <input
                name="currentEmployer"
                type="text"
                placeholder="Current Employer"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="block text-sm">
              <span>
                Current CTC (In Lakhs Per Annum){" "}
                <span className="text-[#EB5757]">*</span>
              </span>
              <select
                name="currentCtc"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm text-[#737373]"
                required
              >
                <option value="">Select Current CTC</option>
                <option>Below 5 LPA</option>
                <option>5 - 10 LPA</option>
                <option>10 - 20 LPA</option>
                <option>20+ LPA</option>
              </select>
            </label>

            <label className="block text-sm">
              <span>
                Expected CTC (In Lakhs Per Annum){" "}
                <span className="text-[#EB5757]">*</span>
              </span>
              <select
                name="expectedCtc"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm text-[#737373]"
                required
              >
                <option value="">Select Expected CTC</option>
                <option>Below 5 LPA</option>
                <option>5 - 10 LPA</option>
                <option>10 - 20 LPA</option>
                <option>20+ LPA</option>
              </select>
            </label>

            <label className="block text-sm">
              <span>
                Notice Period <span className="text-[#EB5757]">*</span>
              </span>
              <select
                name="noticePeriod"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm text-[#737373]"
                required
              >
                <option value="">Notice Period</option>
                <option>Immediate</option>
                <option>15 days</option>
                <option>30 days</option>
                <option>60+ days</option>
              </select>
            </label>

            <label className="block text-sm">
              <span>
                How did you come across this vacancy?{" "}
                <span className="text-[#EB5757]">*</span>
              </span>
              <input
                name="source"
                type="text"
                placeholder="Enter Source"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="block text-sm">
              <span>
                Current Location <span className="text-[#EB5757]">*</span>
              </span>
              <input
                name="currentLocation"
                type="text"
                placeholder="Current Location"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="block text-sm">
              <span>
                Preferred Location <span className="text-[#EB5757]">*</span>
              </span>
              <input
                name="preferredLocation"
                type="text"
                placeholder="Preferred Location"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="block text-sm">
              <span>
                Resume <span className="text-[#EB5757]">*</span>
              </span>
              <input
                name="resume"
                type="file"
                className="mt-2 w-full rounded-sm border border-[#C8CDD2] px-3 py-2 text-sm file:mr-3 file:border-0 file:bg-transparent file:text-sm"
                required
              />
            </label>

            <label className="flex items-center gap-2 text-sm">
              <span>Are you willing to relocate?</span>
              <input name="relocate" type="checkbox" className="h-4 w-4" />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {isSubmitting && isTakingLong && !submitError ? (
              <p className="text-sm text-[#53C22B] animate-pulse">
                Sending application and resume... this might take a moment.
              </p>
            ) : null}

            {submitError ? (
              <p className="text-sm text-[#EB5757]">{submitError}</p>
            ) : null}
          </form>
        </section>

        {showSuccess ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-3xl rounded-[24px] bg-[#F2F2F2] px-6 py-12 text-center text-primary sm:px-12">
              <img
                src={successImg}
                alt="Success"
                className="w-[80px] mx-auto"
              />
              <h2 className="mt-4 text-2xl font-semibold">Success!</h2>
              <p className="mt-6 text-xl text-[#4C4C4C]">
                Thanks, {applicantName}!
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[#4C4C4C]">
                You have successfully applied for{" "}
                <span className="font-semibold text-primary">{job.title}</span>.
                We&apos;ll review the submission and get in touch with you if
                it&apos;s a match. Be sure to check your email for further
                communication from us.
              </p>
              <p className="mt-8 text-xl leading-relaxed text-[#4C4C4C]">
                Cheers,
                <br />
                <span className="font-semibold text-primary">
                  The Green Gem Energy Team
                </span>
              </p>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="mt-10 rounded-lg bg-[#53C22B] px-6 py-2 text-lg font-semibold text-white"
              >
                ok
              </button>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
}
