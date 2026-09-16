function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <img src="/image/profil.jpg.jpg" alt="Foto Profil" className="profile-photo"></img>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

export default Hero;