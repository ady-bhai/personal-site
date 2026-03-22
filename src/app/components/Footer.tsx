import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-[#F4F8F2] text-black p-4 sm:p-6 mt-6 sm:mt-10">
      <div className="max-w-[720px] mx-auto px-4">
        <hr className="border-t border-gray-300 mb-4" />{" "}
        {/* Horizontal separator */}
        <div className="mb-3 text-sm sm:text-base">aditya dot mehta at berkeley dot edu</div> {/* Email */}
        <div className="flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base">
          <a
            href="https://substack.com/@adymehta"
            className="hyperlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            substack
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-mehta-7892311a2/"
            className="hyperlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            href="https://x.com/ady_mehtaa"
            className="hyperlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <a
            href="https://github.com/ady-bhai"
            className="hyperlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="https://scholar.google.co.uk/citations?user=xJIKIuUAAAAJ&hl=en"
            className="hyperlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            google scholar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
