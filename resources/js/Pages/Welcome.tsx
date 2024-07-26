import { Link } from "@inertiajs/react";
import { Button } from "@/shadcn/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/shadcn/ui/card";
import { Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">
            <Head title="Welcome" />
            <header className="container mx-auto max-w-screen-xl flex items-center justify-between h-[8vh] p-6 border-b border-muted md:px-12">
                <a className="hover:opacity-60" href="/">
                    <p>MyBazar</p>
                </a>
                <div className="md:hidden flex flex-row space-x-4">
                    <Link href="/auth">
                        <Button className="inline-flex items-center justify-center bg-[#0A0A0A] rounded-md text-sm font-semibold disabled:pointer-events-none disabled:opacity-50 text-white underline-offset-4 hover:underline hover:bg-[#0A0A0A] h-10 px-4 py-2">
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/auth">
                        <Button className="inline-flex items-center justify-center text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 h-10 px-4 py-2 rounded-full">
                            Get Started
                        </Button>
                    </Link>
                </div>

                <div className="md:flex hidden flex-1">
                    <nav
                        className="!space-x-8 flex items-center opacity-80 flex-1 ml-8"
                        id="mobile-menu"
                    >
                        <Link
                            className="text-sm font-semibold hover:brightness-125"
                            href="/blog"
                        >
                            Blog
                        </Link>
                        <Link
                            className="text-sm font-semibold hover:brightness-125"
                            href="/pricing"
                        >
                            Pricing
                        </Link>
                        <Link
                            className="text-sm font-semibold hover:brightness-125"
                            href="/changelog"
                        >
                            Changelog
                        </Link>
                    </nav>
                    <div className="flex items-center !space-x-4">
                        <Link href="/login">
                            <Button className="inline-flex items-center justify-center bg-[#0A0A0A] rounded-md text-sm font-semibold disabled:pointer-events-none disabled:opacity-50 text-white underline-offset-4 hover:underline hover:bg-[#0A0A0A] !mx-0 !mh-0 !p-0 h-10 px-4 py-2">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button className="inline-flex items-center justify-center text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 h-10 px-4 py-2 rounded-full">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="relative flex flex-col items-center justify-center flex-1 text-center p-6 md:px-12">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#333333] to-[#0A0A0A] opacity-30 blur-md"></div>
                    <div
                        className="absolute inset-0 bg-[#0A0A0A] rounded-xl"
                        style={{
                            maskImage:
                                "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.6) 80%)",
                        }}
                    ></div>
                </div>
                <Link href="/news">
                    <Button
                        variant="outline"
                        className="relative mb-8 text-white mt-16 border-[#DCDCDC] bg-[#0A0A0A] rounded-2xl p-5 z-10"
                    >
                        Discover What's New on myBazar
                    </Button>
                </Link>
                <h1 className="relative font-ui-sans-serif font-bold mb-6 text-[60px] leading-[67.2px] text-[#FAFAFA] md:text-7xl z-10">
                    Welcome To <a className="text-emerald-500">MyBazar!</a>
                </h1>
                <p className="relative font-ui-sans-serif font-normal text-[20px] leading-[30px] text-[#fafafacc] mb-8 md:text-xl z-10">
                    Discover a vibrant marketplace where you can buy and sell
                    unique bazaar treasures!
                    <br /> Whether you're looking for vintage clothing, handmade
                    crafts, or rare collectibles,
                    <br /> myBazar is the perfect place to find it all.
                </p>
                <div className="relative flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 z-10">
                    <Button className="relative bg-black/30 border border-gray-600 p-8 hover:bg-[#0A0A0A] hover:border-emerald-500 backdrop-blur-xl text-white flex items-center justify-center text-sm font-semibold hover:brightness-150 transition ease-in-out rounded-2xl px-4 py-2">
                        Create Your Own Bazaar
                    </Button>
                    <Link
                        href="#"
                        className="relative backdrop-blur-xl text-white flex items-center justify-center text-sm font-semibold hover:brightness-150 transition ease-in-out rounded-2xl px-4 py-2"
                    >
                        Join a Community &gt;
                    </Link>
                </div>

                <div className="relative w-full h-px bg-zinc-900 mt-20 z-10"></div>
            </main>

            {/* <section className="p-6 md:px-12">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card className="bg-[#1a1a1a] text-white hover:scale-105 transition-transform duration-300">
                        <CardHeader className="flex items-center justify-between">
                            <CardTitle className="text-lg">Events</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            sales
                                        </p>
                                        <p className="text-lg font-bold">
                                            Purchase Approved
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            today at 9:07 AM
                                        </p>
                                    </div>
                                    <CheckIcon className="text-green-500 w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            sales
                                        </p>
                                        <p className="text-lg font-bold">
                                            Chargeback on Purchase
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            today at 9:07 AM
                                        </p>
                                    </div>
                                    <CircleAlertIcon className="text-yellow-500 w-6 h-6" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#1a1a1a] text-white hover:scale-105 transition-transform duration-300">
                        <CardHeader className="flex items-center justify-between">
                            <CardTitle className="text-lg">Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            purchase-approved
                                        </p>
                                        <p className="text-lg font-bold">
                                            hotmart
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Jan 21, 2024
                                        </p>
                                    </div>
                                    <CheckIcon className="text-green-500 w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            identity
                                        </p>
                                        <p className="text-lg font-bold">
                                            testeComprador2110
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            postman15@example.com
                                        </p>
                                    </div>
                                    <UserIcon className="text-blue-500 w-6 h-6" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section> */}
            <section className="p-8 md:px-72 text-start">
                <div className="flex flex-col items-center mb-12">
                    <Button
                        variant="outline"
                        className="relative mb-4 text-white border-[#DCDCDC] bg-[#0A0A0A] rounded-2xl px-4 py-2 z-10"
                    >
                        Explore More Features
                    </Button>
                    <h1 className="relative font-ui-sans-serif font-bold text-[60px] leading-[67.2px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#959595] md:text-3xl z-10">
                        Discover the full
                    </h1>
                    <h1 className="relative font-ui-sans-serif font-bold text-[60px] leading-[67.2px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#959595] md:text-3xl z-10">
                        potential of MyBazar
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Card className="bg-[#0A0A0A] text-white border-none">
                        <CardHeader className="flex items-start justify-between">
                            <CardTitle className="text-lg text-start">
                                Centralized Event Management
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-start">
                            <p>
                                Consolidate notifications from various sources
                                into one intuitive dashboard for efficient
                                tracking and management.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#0A0A0A] text-white border-none">
                        <CardHeader className="flex items-start justify-between">
                            <CardTitle className="text-lg text-start">
                                Seamless Integration
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-start">
                            <p>
                                Connect MyBazar with your existing tools using
                                webhooks for a smooth, automated workflow and
                                enhanced operations.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#0A0A0A] text-white border-none">
                        <CardHeader className="flex items-start justify-between">
                            <CardTitle className="text-lg text-start">
                                Data-Driven Insights
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-start">
                            <p>
                                Leverage the power of analytics to make informed
                                decisions and improve your team's event
                                management strategies.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#0A0A0A] text-white border-none">
                        <CardHeader className="flex items-start justify-between">
                            <CardTitle className="text-lg text-start">
                                Developer-Friendly API
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-start">
                            <p>
                                Enjoy a streamlined developer experience with
                                our easy-to-use API, designed for quick
                                notification creation and management.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#0A0A0A] text-white border-none">
                        <CardHeader className="flex items-start justify-between">
                            <CardTitle className="text-lg text-start">
                                Multi-Platform Notifications
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-start">
                            <p>
                                Extend your reach by sending notifications
                                through various platforms, including Discord,
                                Slack, and more, with MyBazar.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#0A0A0A] text-white border-none">
                        <CardHeader className="flex items-start justify-between">
                            <CardTitle className="text-lg text-start">
                                Customizable Event Properties
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-start">
                            <p>
                                Tailor your event tracking with custom
                                properties, ensuring a rich context for every
                                notification sent through MyBazar.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

function CircleAlertIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
