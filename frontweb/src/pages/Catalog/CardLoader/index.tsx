import ContentLoader from "react-content-loader";

import "./styles.css";

const CardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={320}
      height={460}
      viewBox="0 0 300 300"
      backgroundColor="#ecebeb"
      foregroundColor="#d6d2d2"
    >
      <rect x="0" y="0" rx="2" ry="2" width="320" height="460" />
    </ContentLoader>
  </div>
);

export default CardLoader;
