import { ClerkProvider } from '@clerk/nextjs'
export const metadata = {
    title: 'Echo',
    description: 'A Next.js 13 Social Media Application similar to Threads and Twitter'
}

export default function RootLayout({ children } : { children: React.ReactNode }){
    return (<ClerkProvider></ClerkProvider>)
}