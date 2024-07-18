import { useEffect, useRef, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { Label } from "@/shadcn/ui/label";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@/shadcn/ui/button";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current?.focus();
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-emerald-800">
            <div className="w-full max-w-md rounded-2xl bg-background px-6 py-12 shadow-xl sm:px-10">
                <div className="mb-8 flex items-center justify-center">
                    <ShoppingBasketIcon className="h-14 w-14 text-green-700" />
                    <span className="ml-2 text-3xl font-bold text-green-700">
                        myBazaar
                    </span>
                </div>
                <form className="space-y-6" onSubmit={submit}>
                    <div>
                        <Label htmlFor="name" className="sr-only">
                            Name
                        </Label>
                        <Input
                            ref={nameInputRef}
                            id="name"
                            name="name"
                            value={data.name}
                            autoComplete="name"
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-input bg-muted px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="email" className="sr-only">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-input bg-muted px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="password" className="sr-only">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-input bg-muted px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="password_confirmation"
                            className="sr-only"
                        >
                            Confirm Password
                        </Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                            placeholder="Confirm your password"
                            className="w-full rounded-lg border border-input bg-muted px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                    <Button
                        disabled={processing}
                        className="w-full rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                        Create Account
                    </Button>
                </form>
                <div className="mt-6 flex items-center justify-between">
                    <Link
                        href={route("password.request")}
                        className="text-sm font-medium text-muted-foreground hover:underline"
                        prefetch="false"
                    >
                        Forgot Password?
                    </Link>
                    <Link
                        href={route("login")}
                        className="text-sm font-medium text-muted-foreground hover:underline"
                        prefetch="false"
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </div>
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
