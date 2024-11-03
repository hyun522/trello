export const metadata = {
  title: 'trello',
  description: 'marketing page',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
