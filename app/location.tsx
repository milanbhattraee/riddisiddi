

const Map = () => {
  const lat = 26.621340;
  const lng = 87.988694;

  return (
    <section className="layout-padding-x py-10 h-[500px]">

    <div  style={{ width: "100%", height: "100%" }}>
      <iframe
      className="rounded-lg"
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      src={`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
      ></iframe>
    </div>
    </section>
  );
};

export default Map;
