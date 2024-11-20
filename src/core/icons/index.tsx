export const TickIcon = ({ width = 26, height = 26, color = "#00C853" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
  >
    <circle
      cx="13"
      cy="13"
      r="12"
      stroke="#00C853"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.5 13.5L12 16L17 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CrossIcon = ({ width = 26, height = 26, color = "#FF0000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
  >
    <circle cx="13" cy="13" r="12" stroke={color} strokeWidth="2" fill="none" />
    <path
      d="M9 9L17 17"
      stroke={color}
      strokeWidth="2"
      stroke-linecap="round"
    />
    <path d="M17 9L9 17" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ExclamationIcon = ({
  width = 26,
  height = 26,
  color = "#FFC107",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="none"
  >
    <circle cx="13" cy="13" r="12" stroke={color} strokeWidth="2" fill="none" />
    <line
      x1="13"
      y1="8"
      x2="13"
      y2="16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="13" cy="18.5" r="1.5" fill={color} />
  </svg>
);
