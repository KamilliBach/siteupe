export default function UPELogo({ width = 120, height = 120 }: { width?: number; height?: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      {/* Círculo de fundo */}
      <circle cx="100" cy="100" r="95" fill="white" stroke="#1A4081" strokeWidth="2" />

      {/* Mapa do Paraná estilizado */}
      <g id="parana-map">
        {/* Silhueta simplificada do Paraná */}
        <path
          d="M 70 80 L 90 75 L 100 70 L 110 72 L 120 75 L 125 85 L 122 95 L 120 110 L 110 120 L 90 125 L 75 120 L 65 110 L 62 95 Z"
          fill="#4CAF50"
          stroke="#388E3C"
          strokeWidth="1"
        />
      </g>

      {/* Texto "UPE" centralizado */}
      <text
        x="100"
        y="110"
        fontFamily="Arial, sans-serif"
        fontSize="48"
        fontWeight="bold"
        fill="#1A4081"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="2"
      >
        UPE
      </text>

      {/* Texto circular envolvente */}
      <defs>
        <path
          id="circle-path"
          d="M 30, 100 A 70, 70 0 0, 1 170, 100 A 70, 70 0 0, 1 30, 100"
          fill="none"
        />
      </defs>

      <text
        fontSize="11"
        fill="#1A4081"
        fontFamily="Arial, sans-serif"
        fontWeight="600"
        letterSpacing="1"
      >
        <textPath href="#circle-path" startOffset="50%" textAnchor="middle">
          UNIÃO PARANAENSE DOS ESTUDANTES
        </textPath>
      </text>

      {/* Ponto decorativo inferior */}
      <circle cx="100" cy="175" r="3" fill="#4CAF50" />
    </svg>
  );
}

