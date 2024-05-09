import Link from "next/link";

export default function Pastel() {
  // Generate pastel color in a gradient manner
  const rgbToHex = (r: any, g: any, b: any) => {
    const toHex = (c: any) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return toHex(r) + toHex(g) + toHex(b);
  };
  const generatePastelColor = (index: any) => {
    // Calculate RGB values based on index
    const r = Math.floor(Math.random() * 126) + 126;
    const g = Math.floor(Math.random() * 126) + 130;
    const b = Math.floor(Math.random() * 126) + 130;

    // Convert RGB to HEX format
    return rgbToHex(r, g, b);
  };

  // Generate pastel palette with 5 colors in each group
  const generatePastelPalette = () => {
    const palette = [];
    for (let i = 0; i < 190; i++) {
      // Generate 35 groups
      const group = [];
      for (let j = 0; j < 5; j++) {
        // Generate 5 colors in each group
        group.push(generatePastelColor(i * 5 + j));
      }
      palette.push(group);
    }
    return palette;
  };

  const pastelPalette = generatePastelPalette(); // Generate pastel colors palette

  // Display pastel palette
  return (
    <div>
      {pastelPalette.map((group, groupIndex) => (
        <div key={groupIndex} style={{ marginBottom: "20px" }}></div>
      ))}
      {pastelPalette.map((group, groupIndex) => (
        <div key={groupIndex} style={{ margin: "20px" }}>
          {group.map((color, colorIndex) => (
            <Link
              key={colorIndex}
              style={{
                width: "20%",
                height: "80px",
                backgroundColor: `#${color}`,
                display: "inline-block",
                marginRight: "0",
              }}
              href={`/palettes/${group.join(`-`)}`}
            >
              {color}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
