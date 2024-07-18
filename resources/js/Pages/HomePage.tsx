import { Button } from "@/shadcn/ui/button";
import { Head, Link, useForm } from "@inertiajs/react";
import UserTypeModal from "@/Components/ui/userTypeModal";
import React from "react";

type User = {
    typeUser: string | null;
};

type Auth = {
    user: User;
};

type HomePageProps = {
    auth: Auth;
};

export default function HomePage({ auth }: HomePageProps) {
    const typeUser = auth.user.typeUser;

    return (
        <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0]">
            <Head title="Home" />
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Link
                    href="#"
                    className="flex items-center gap-2"
                >
                    <ShoppingBasketIcon className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold text-green-700">
                        myBazaar
                    </span>
                </Link>

                <nav className="ml-auto flex items-center gap-4">
                    <NavLink href="#" icon={HomeIcon} text="Home" />
                    <NavLink href="#" icon={CompassIcon} text="Explore" />
                    <NavLink href="#" icon={UsersIcon} text="Communities" />
                    <NavLink
                        href="#"
                        icon={MessageCircleIcon}
                        text="Messages"
                    />
                    <NavLink href="#" icon={ShoppingCartIcon} text="Cart" />
                    <NavLink href="/profile" icon={UserIcon} text="Profile" />
                </nav>
            </header>
            <main className="flex-1 px-4 py-8 sm:px-6 md:px-8 lg:px-10">
                <section className="grid gap-8">
                    {[1, 2, 3].map((bazaar) => (
                        <BazaarCard key={bazaar} bazaarNumber={bazaar} />
                    ))}
                </section>
            </main>
            {!typeUser && <UserTypeModal />}
        </div>
    );
}

type NavLinkProps = {
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, icon: Icon, text }) => (
    <Link
        href={href}
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-emerald-500 hover:text-accent-foreground"
    >
        <Icon className="h-5 w-5" />
        <span>{text}</span>
    </Link>
);

type BazaarCardProps = {
    bazaarNumber: number;
};

const BazaarCard: React.FC<BazaarCardProps> = ({ bazaarNumber }) => (
    <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Bazaar {bazaarNumber}</h3>
            <Button className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary">
                Visit
            </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
                <img
                    key={i}
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Clothing Item"
                    className="rounded-md object-cover"
                />
            ))}
        </div>
    </div>
);

const CompassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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

const MessageCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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

const ShoppingBasketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
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

const ShoppingCartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
);

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
        <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M8 21v-2a4 4 0 0 1 3-3.87" />
        <path d="M12 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0" />
        <path d="M17 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0" />
    </svg>
);


