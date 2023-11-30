const scroolToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const marginTop = 112;
    const scrollToY =
      section.getBoundingClientRect().top + window.scrollY - marginTop;
    window.scrollTo({ top: scrollToY, behavior: "smooth" });
  }
};

export default scroolToSection;
