function HamburgerIcon({ width = 16, height = 15 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 15">
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
      </g>
    </svg>
  );
}
export default HamburgerIcon;
