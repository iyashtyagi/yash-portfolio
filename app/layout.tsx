import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Yash Tyagi - Software Engineer',
    description: 'Portfolio website of Yash Tyagi - Software Engineer, Full-Stack Developer, Backend Developer, and Frontend Developer',
    openGraph: {
        title: 'Yash Tyagi - Software Engineer',
        description: 'Portfolio website of Yash Tyagi - Software Engineer, Full-Stack Developer, Backend Developer, and Frontend Developer',
        url: 'https://yashtyagi.in',
        siteName: 'Yash Tyagi Portfolio',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    storageKey="portfolio-theme"
                >
                    <Navbar />
                    <main className="flex min-h-screen flex-col">{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}