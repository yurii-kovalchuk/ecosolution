const scroolToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  const header = document.getElementById("header");
  let marginTop = 0;

  if (header) {
    marginTop = header.clientHeight;
  }

  if (section) {
    const scrollToY =
      section.getBoundingClientRect().top + window.scrollY - marginTop;
    window.scrollTo({ top: scrollToY, behavior: "smooth" });
  }
};

export default scroolToSection;
