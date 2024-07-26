import React, { useState, FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Label } from "@/shadcn/ui/label";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@/shadcn/ui/button";
import InputError from "@/Components/InputError";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/Components/Footer";

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

interface FormData {
    email: string;
    password: string;
    remember: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const handleGitHubLogin = () => {
        window.location.href = route("socialite.redirect", ["github"]);
    };

    const handleGoogleLogin = () => {
        window.location.href = route("socialite.redirect", ["google"]);
    };

    const [isEmailForm, setIsEmailForm] = useState(false);
    const { data, setData, post, processing, errors, reset } =
        useForm<FormData>({
            email: "",
            password: "",
            remember: true,
        });

    const handleContinueWithEmail = () => {
        setIsEmailForm(true);
    };

    const submitEmail: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        post(route("send.magic.link"), {
            onSuccess: () => {
                toast.success(
                    `Email sent\nWe have sent an email to ${data.email} with a verification code.`,
                    {
                        position: "bottom-right",
                        autoClose: 5000,
                        closeButton: true,
                    }
                );
                reset(); // Reset the form data after successful submission
            },
            onError: () => {
                toast.error("An error occurred while sending the email.", {
                    position: "bottom-right",
                    autoClose: 5000,
                    closeButton: true,
                });
            },
        });
    };

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4 py-12 sm:px-6 lg:px-8">
            <div className="relative z-10 w-full max-w-md space-y-8 p-12 rounded-2xl ">
                <Head title="Sign In MyBazar" />
                <div className="text-center">
                    <Link
                        href="/"
                        className="flex justify-center items-center cursor-pointer"
                    >
                        <ShoppingBasketIcon className="h-20 w-20 text-white cursor-pointer" />
                    </Link>
                </div>
                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                <form onSubmit={isEmailForm ? submitEmail : submit}>
                    <Button
                        type="button"
                        className="flex items-center rounded-xl w-full h-14 bg-[#202020] hover:bg-[#202020] mb-4"
                        onClick={() => {
                            window.location.href = route("socialite.redirect", [
                                "google",
                            ]);
                        }}
                    >
                        <GoogleIcon className="h-6 w-6 mr-2" />
                        Continue with Google
                    </Button>
                    <Button
                        type="button"
                        className="flex items-center rounded-xl w-full h-14 bg-[#202020] hover:bg-[#202020] mb-4"
                        onClick={handleGitHubLogin}
                    >
                        <GithubIcon className="h-6 w-6 mr-2" />
                        Continue with GitHub
                    </Button>
                    <div className="flex items-center justify-center my-4">
                        <div className="relative text-gray-400 text-sm">
                            <span className="relative px-4 bg-[#0A0A0A]">
                                OR
                            </span>
                        </div>
                    </div>
                    {!isEmailForm && (
                        <>
                            <Button
                                type="button"
                                className="flex items-center rounded-xl w-full h-14 bg-[#202020] hover:bg-[#202020] mb-4"
                                onClick={handleContinueWithEmail}
                            >
                                Continue with email
                            </Button>
                        </>
                    )}
                    {isEmailForm && (
                        <div className="mb-4">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                className="flex items-center rounded-xl w-full h-14 border-[#202020] bg-[#151515] hover:bg-[#151515] mb-4 text-white"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            <InputError message={errors.email} />
                            <Button
                                type="submit"
                                className="flex items-center rounded-xl w-full h-14 bg-[#202020] hover:bg-[#202020] mb-4"
                                disabled={processing}
                            >
                                Send magic link
                            </Button>
                        </div>
                    )}
                </form>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function ShoppingBasketIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
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

function GoogleIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24"
            height="24"
        >
            <path
                fill="#EA4335"
                d="M24 9.5c3.18 0 5.7 1.07 7.78 2.84l5.82-5.82C34.12 3.44 29.41 1.5 24 1.5 14.95 1.5 7.58 7.38 4.55 15.42l6.83 5.31C13.03 14.37 18.1 9.5 24 9.5z"
            />
            <path
                fill="#34A853"
                d="M46.5 24c0-1.54-.14-3.04-.41-4.5H24v9h12.7c-.58 2.9-2.2 5.36-4.53 7.02l6.84 5.31C43.52 37.69 46.5 31.22 46.5 24z"
            />
            <path
                fill="#4A90E2"
                d="M9.37 28.56c-.87-2.63-.87-5.49 0-8.12l-6.83-5.31C.64 19.96 0 22.86 0 24.01 0 31.14 4.4 37.09 10.63 40.11l6.83-5.3C13.72 32.6 10.24 30.34 9.37 28.56z"
            />
            <path
                fill="#FBBC05"
                d="M24 46.5c5.41 0 10.12-1.94 13.66-5.19l-6.84-5.31C28.3 37.2 26.18 38 24 38c-5.9 0-10.97-4.87-11.61-11.09l-6.83 5.31C7.58 40.62 14.95 46.5 24 46.5z"
            />
        </svg>
    );
}

function GithubIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                fill="#fff"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.32 3.438 9.834 8.207 11.422.6.11.793-.26.793-.577 0-.287-.01-1.045-.015-2.053-3.338.724-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.492.998.108-.774.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.309.467-2.381 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.007-.323 3.3 1.23.957-.266 1.983-.398 3.004-.403 1.02.005 2.047.137 3.005.403 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.841 1.233 1.913 1.233 3.222 0 4.61-2.804 5.623-5.475 5.921.43.371.815 1.104.815 2.224 0 1.605-.014 2.897-.014 3.293 0 .32.19.694.8.576C20.566 21.83 24 17.32 24 12c0-6.63-5.37-12-12-12z"
            />
        </svg>
    );
}
