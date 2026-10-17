import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Keenan: Portfolio & Technical Documentation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#09090b',
          color: '#f4f4f5',
        }}
      >
        <div style={{ fontSize: 28, color: '#a1a1aa', letterSpacing: 2 }}>
          PELAJAR SMK TKJ
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 16, lineHeight: 1.05 }}>
          Keenan
        </div>
        <div style={{ fontSize: 36, color: '#a1a1aa', marginTop: 24 }}>
          Portfolio & Technical Documentation
        </div>
      </div>
    ),
    { ...size }
  );
}
