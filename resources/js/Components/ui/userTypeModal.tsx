import { Button } from "@/shadcn/ui/button";
import { Link } from "@inertiajs/react";
import React from "react";

const UserTypeModal: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            {/* Background semi-opaco */}
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>

            {/* Conteúdo modal */}
            <div className="relative w-full max-w-md rounded-2xl bg-background px-6 py-12 shadow-xl sm:px-10">
                <div className="mb-8 flex items-center justify-center">
                    <ShoppingBasketIcon className="h-14 w-14 text-green-500" />
                    <span className="ml-2 text-3xl font-bold text-green-500">
                        myBazaar
                    </span>
                </div>
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-center">
                        Welcome to myBazaar!
                    </h2>
                    <p className="text-muted-foreground">
                        Are you here to buy clothes or sell them in your own
                        bazaar?
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button className="rounded-lg bg-green-500 px-4 py-2 font-medium text-primary-foreground shadow-md transition-colors hover:bg-green-600/90 focus:outline-none focus:ring-1 focus:ring-primary">
                            Buy Clothes
                        </Button>
                        <Link href={route("seller.payment")}>
                            <Button className="rounded-lg border border-input bg-background px-4 py-2 font-medium shadow-sm text-black transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                                Sell Clothes
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ShoppingBasketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
};

export default UserTypeModal;
