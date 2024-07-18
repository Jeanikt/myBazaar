import { Link } from "@inertiajs/react";
import { Sheet, SheetTrigger, SheetContent } from "@/shadcn/ui/sheet";
import { Button } from "@/shadcn/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/shadcn/ui/card";

interface PaymentPageProps {
    // Add any props here if needed
}

const PaymentPage: React.FC<PaymentPageProps> = () => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-emerald-700">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Link
                    href="#"
                    className="flex items-center gap-2"
                    prefetch={false}
                >
                    <ShoppingBasketIcon className="h-6 w-6 text-white" />
                    <span className="text-xl font-bold text-white">
                        myBazaar
                    </span>
                </Link>
                <nav className="ml-auto flex items-center gap-4 sm:gap-2">
                    <Link
                        href="#"
                        className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:flex"
                        prefetch={false}
                    >
                        <HomeIcon className="h-5 w-5" />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="#"
                        className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:flex"
                        prefetch={false}
                    >
                        <CompassIcon className="h-5 w-5" />
                        <span>Explore</span>
                    </Link>
                    <Link
                        href="#"
                        className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:flex"
                        prefetch={false}
                    >
                        <MessageCircleIcon className="h-5 w-5" />
                        <span>Messages</span>
                    </Link>
                    <Link
                        href="#"
                        className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:flex"
                        prefetch={false}
                    >
                        <UsersIcon className="h-5 w-5" />
                        <span>Communities</span>
                    </Link>
                    <Link
                        href="#"
                        className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:flex"
                        prefetch={false}
                    >
                        <BriefcaseIcon className="h-5 w-5" />
                        <span>Bazaar</span>
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="sm:hidden"
                            >
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="grid gap-4 py-6">
                                <Link
                                    href="#"
                                    className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                    prefetch={false}
                                >
                                    <HomeIcon className="h-5 w-5" />
                                    <span>Home</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                    prefetch={false}
                                >
                                    <CompassIcon className="h-5 w-5" />
                                    <span>Explore</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                    prefetch={false}
                                >
                                    <MessageCircleIcon className="h-5 w-5" />
                                    <span>Messages</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                    prefetch={false}
                                >
                                    <UsersIcon className="h-5 w-5" />
                                    <span>Communities</span>
                                </Link>
                                <Link
                                    href="#"
                                    className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                    prefetch={false}
                                >
                                    <BriefcaseIcon className="h-5 w-5" />
                                    <span>Bazaar</span>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </header>
            <main className="flex-1">
                <section className="flex min-h-[calc(100vh-56px)] items-center justify-center">
                    <div className="w-full max-w-4xl rounded-2xl bg-background px-6 py-12 shadow-xl sm:px-10">
                        <div className="mb-8 flex items-center justify-center">
                            <ShoppingBasketIcon className="h-10 w-10 text-green-600" />
                            <span className="ml-2 text-2xl font-bold text-primary">
                                Choose your Bazaar Plan
                            </span>
                        </div>
                        <div className="space-y-6">
                            <div className="grid gap-4 md:grid-cols-2">
                                <Card className="bg-background shadow-md flex flex-col">
                                    <CardHeader>
                                        <CardTitle>Premium Plan</CardTitle>
                                        <CardDescription>
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CrownIcon className="h-5 w-5" />
                                                <span className="font-medium">
                                                    $20/month
                                                </span>
                                                <BadgeCheckIcon className="h-5 w-5" />
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            <li className="text-green-600">
                                                <div className="flex items-center gap-2">
                                                    <ShirtIcon className="h-5 w-5" />
                                                    <span>
                                                        Unlimited clothes
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="text-green-600">
                                                <div className="flex items-center gap-2">
                                                    <WebcamIcon className="h-5 w-5" />
                                                    <span>Unlimited chat</span>
                                                </div>
                                            </li>
                                            <li className="text-green-600">
                                                <div className="flex items-center gap-2">
                                                    <PaletteIcon className="h-5 w-5" />
                                                    <span>
                                                        Full bazaar
                                                        customization
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="text-green-600">
                                                <div className="flex items-center gap-2">
                                                    <LinkIcon className="h-5 w-5" />
                                                    <span>
                                                        Link to social networks
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="text-green-600">
                                                <div className="flex items-center gap-2">
                                                    <MegaphoneIcon className="h-5 w-5" />
                                                    <span>
                                                        Better advertising in
                                                        platform's algorithm
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="mt-auto flex justify-center">
                                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                            Select Plan
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="bg-background shadow-md flex flex-col">
                                    <CardHeader>
                                        <CardTitle>Basic Plan</CardTitle>
                                        <CardDescription>
                                            <div className="flex items-center gap-2">
                                                <DollarSignIcon className="h-5 w-5 text-muted-foreground" />
                                                <span className="text-muted-foreground font-medium">
                                                    $5/month
                                                </span>
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            <li className="text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <ShirtIcon className="h-5 w-5 text-muted-foreground" />
                                                    <span>4 clothes limit</span>
                                                </div>
                                            </li>
                                            <li className="text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <WebcamIcon className="h-5 w-5 text-muted-foreground" />
                                                    <span>30 days chat </span>
                                                </div>
                                            </li>
                                            <li className="text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <PaletteIcon className="h-5 w-5 text-muted-foreground" />
                                                    <span>
                                                        Limited customization
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <LinkIcon className="h-5 w-5 text-muted-foreground" />
                                                    <span>
                                                        No social network links
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <MegaphoneIcon className="h-5 w-5 text-muted-foreground" />
                                                    <span>
                                                        Standard advertising
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="mt-auto flex justify-center">
                                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                            Select Plan
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="flex justify-center">
                                <p className="text-sm text-center text-white">
                                    * All plans are billed annually
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex justify-center items-center h-16 bg-emerald-800 text-white">
                <p>&copy; 2024 myBazaar. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PaymentPage;

function BadgeCheckIcon(props) {
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
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

function BriefcaseIcon(props) {
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
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    );
}

function CompassIcon(props) {
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
            <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    );
}

function CrownIcon(props) {
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
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
            <path d="M5 21h14" />
        </svg>
    );
}

function DollarSignIcon(props) {
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
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
}

function HomeIcon(props) {
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    );
}

function LinkIcon(props) {
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
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    );
}

function MegaphoneIcon(props) {
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
            <path d="m3 11 18-5v12L3 14v-3z" />
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
    );
}

function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function MessageCircleIcon(props) {
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
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    );
}

function PaletteIcon(props) {
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
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
    );
}

function ShirtIcon(props) {
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
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
    );
}

function ShoppingBasketIcon(props) {
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
            <path d="m15 11-1 9" />
            <path d="m19 11-4-7" />
            <path d="M2 11h20" />
            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
            <path d="M4.5 15.5h15" />
            <path d="m5 11 4-7" />
            <path d="m9 11 1 9" />
        </svg>
    );
}

function UsersIcon(props) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function WebcamIcon(props) {
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
            <circle cx="12" cy="10" r="8" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 22h10" />
            <path d="M12 22v-4" />
        </svg>
    );
}

function XIcon(props) {
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
