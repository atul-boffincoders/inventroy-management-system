'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/shared/navbar';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="relative min-h-screen ">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
