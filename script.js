document.addEventListener("DOMContentLoaded", () => {
  // Animación de entrada con IntersectionObserver
  const fadeElements = document.querySelectorAll(
    ".hero-texto, .hero-imagen, .card, .sobre-mi p, .habilidades i, .contacto form, .redes a"
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const onScrollAppear = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    el.classList.add("fade-in");
    onScrollAppear.observe(el);
  });

  // Animación de clic en botones
  const botones = document.querySelectorAll(".btn, .btn-card, .contacto button");
  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.add("clicked");
      setTimeout(() => btn.classList.remove("clicked"), 300);
    });
  });

  // Efecto de enfoque en inputs
  const inputs = document.querySelectorAll(".contacto input, .contacto textarea");
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#007BFF";
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = "#ccc";
    });
  });
});
